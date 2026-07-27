"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { getTranscriptionProvider } from "@/lib/transcription/provider";

const platformUrlPatterns: Record<string, RegExp> = {
  tiktok: /^(https?:\/\/)?(www\.)?(vm\.)?tiktok\.com\//i,
  reels: /^(https?:\/\/)?(www\.)?instagram\.com\/(p|reel)\//i,
  shorts: /^(https?:\/\/)?(www\.)?(youtube\.com\/shorts|youtu\.be\/shorts)\//i,
};

const schema = z.object({
  url: z.string().url(),
  platform: z.enum(["tiktok", "reels", "shorts"]),
}).refine(
  (data) => platformUrlPatterns[data.platform]?.test(data.url),
  { message: "URL does not match the selected platform" },
);

export interface SubmitResult {
  success: boolean
  taskId?: string
  remainingQuota?: number
  error?: string
  needsUpgrade?: boolean
}

export async function submitExtraction(formData: FormData): Promise<SubmitResult> {
  const rawUrl = formData.get("url");
  const rawPlatform = formData.get("platform");

  const parsed = schema.safeParse({ url: rawUrl, platform: rawPlatform });
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Invalid URL or platform";
    return { success: false, error: msg };
  }

  const { url, platform } = parsed.data;

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? headersList.get("x-real-ip") ?? "unknown";

  let isLoggedIn = false;
  let userId: string | undefined;
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    isLoggedIn = !!user;
    userId = user?.id;
  } catch {}

  const identifier = userId ?? ip;

  const today = new Date().toISOString().slice(0, 10);

  const count = await prisma.usageLog.count({
    where: {
      identifier: identifier,
      usedAt: { gte: new Date(today) },
    },
  });

  const limit = isLoggedIn ? 50 : 20;
  if (count >= limit) {
    const msg = isLoggedIn
      ? `Daily limit reached (${limit}/day). Upgrade to Pro for unlimited extracts.`
      : `Daily limit reached (${limit}/day). Sign in for 50 free extracts per day.`;
    return { success: false, error: msg, needsUpgrade: isLoggedIn };
  }

  const task = await prisma.task.create({
    data: {
      status: "pending",
      platform,
      videoUrl: url,
      userId: userId ?? null,
      anonymousId: userId ? null : ip,
    },
  });

  await prisma.usageLog.create({
    data: { identifier: ip },
  });

  const providerName = process.env.TRANSCRIPTION_PROVIDER || "apify";
  const isLocal = providerName === "local";

  if (!isLocal) {
    try {
      await prisma.task.update({
        where: { id: task.id },
        data: { status: "processing" },
      });

      const provider = await getTranscriptionProvider();
      const result = await provider.getTranscript(url, platform);

      await prisma.task.update({
        where: { id: task.id },
        data: {
          status: "done",
          transcript: result.transcript,
          wordCount: result.wordCount,
          durationSeconds: result.durationSeconds,
        },
      });

      await prisma.extract.create({
        data: {
          anonymousId: ip,
          platform,
          videoUrl: url,
          transcript: result.transcript,
          wordCount: result.wordCount,
          durationSeconds: result.durationSeconds,
        },
      });
    } catch (err) {
      await prisma.task.update({
        where: { id: task.id },
        data: {
          status: "failed",
          error: err instanceof Error ? err.message : "Unknown error",
        },
      });
    }
  }

  return {
    success: true,
    taskId: task.id,
    remainingQuota: limit - count - 1,
  };
}
