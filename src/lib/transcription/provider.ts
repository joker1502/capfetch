import type { TranscriptionProvider } from "./interface";

const providers: Record<string, () => Promise<TranscriptionProvider>> = {
  apify: () => import("./apify").then((m) => new m.ApifyProvider()),
};

export function getTranscriptionProvider(): Promise<TranscriptionProvider> {
  const name = process.env.TRANSCRIPTION_PROVIDER || "apify";
  const factory = providers[name];
  if (!factory) {
    throw new Error(`Unknown transcription provider: ${name}`);
  }
  return factory();
}
