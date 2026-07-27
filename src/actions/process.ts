"use server";

import { prisma } from "@/lib/prisma";
import { getTranscriptionProvider } from "@/lib/transcription/provider";

export async function processTask(taskId: string): Promise<void> {
  const task = await prisma.task.findUnique({ where: { id: taskId } });

  if (!task || task.status !== "pending") return;

  await prisma.task.update({
    where: { id: taskId },
    data: { status: "processing" },
  });

  try {
    const provider = await getTranscriptionProvider();
    const result = await provider.getTranscript(task.videoUrl, task.platform);

    await prisma.task.update({
      where: { id: taskId },
      data: {
        status: "done",
        transcript: result.transcript,
        wordCount: result.wordCount,
        durationSeconds: result.durationSeconds,
      },
    });

    await prisma.extract.create({
      data: {
        userId: task.userId,
        anonymousId: task.anonymousId,
        platform: task.platform,
        videoUrl: task.videoUrl,
        transcript: result.transcript,
        wordCount: result.wordCount,
        durationSeconds: result.durationSeconds,
      },
    });
  } catch (err) {
    await prisma.task.update({
      where: { id: taskId },
      data: {
        status: "failed",
        error: err instanceof Error ? err.message : "Unknown error",
      },
    });
  }
}
