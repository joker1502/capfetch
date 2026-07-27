import type { TranscriptionProvider, TranscriptResult } from "./interface";

export class ApifyProvider implements TranscriptionProvider {
  name = "apify";

  async getTranscript(url: string, platform: string): Promise<TranscriptResult> {
    const apiKey = process.env.APIFY_API_KEY;
    if (!apiKey) throw new Error("APIFY_API_KEY not configured");

    const actorId = platform === "tiktok"
      ? "clockworks/free-tiktok-transcript-downloader"
      : "clockworks/free-instagram-transcript-downloader";

    const response = await fetch(
      `https://api.apify.com/v2/acts/${actorId}/runs?token=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startUrls: [{ url }],
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Apify API error: ${response.status}`);
    }

    const data = await response.json();
    const transcript = data?.defaultDatasetId
      ? await fetchDataset(data.defaultDatasetId, apiKey)
      : "";

    return {
      transcript,
      wordCount: transcript.split(/\s+/).length,
    };
  }
}

async function fetchDataset(datasetId: string, apiKey: string): Promise<string> {
  const res = await fetch(
    `https://api.apify.com/v2/datasets/${datasetId}/items?token=${apiKey}&format=json`,
  );
  if (!res.ok) return "";
  const items = await res.json();
  return items
    .map((item: { text?: string }) => item.text || "")
    .filter(Boolean)
    .join("\n");
}
