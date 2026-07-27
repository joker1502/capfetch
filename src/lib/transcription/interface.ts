export interface TranscriptResult {
  transcript: string
  wordCount: number
  durationSeconds?: number
}

export interface TranscriptionProvider {
  name: string
  getTranscript(url: string, platform: string): Promise<TranscriptResult>
}
