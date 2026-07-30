import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { customProvider } from "ai";

const opencodego = createOpenAICompatible({
  name: "opencodego",
  baseURL: process.env.OPENCODEGO_BASE_URL ?? "https://api.opencode.ai/v1",
  apiKey: process.env.OPENCODEGO_API_KEY,
});

export const aiProvider = customProvider({
  languageModels: {
    "default": opencodego("deepseek-v4-flash"),
  },
  fallbackProvider: opencodego,
});

export function getAIModel() {
  return aiProvider.languageModel("default");
}
