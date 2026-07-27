"use server";

import { prisma } from "@/lib/prisma";

export interface StatusResult {
  status: "pending" | "processing" | "done" | "failed"
  transcript?: string
  wordCount?: number
  durationSeconds?: number
  error?: string
}

export async function getTaskStatus(taskId: string): Promise<StatusResult> {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    return { status: "failed", error: "Task not found" };
  }

  return {
    status: task.status as StatusResult["status"],
    transcript: task.transcript ?? undefined,
    wordCount: task.wordCount ?? undefined,
    durationSeconds: task.durationSeconds ?? undefined,
    error: task.error ?? undefined,
  };
}
