// ✅ src/config/openai-config.ts
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET!,
  organization: process.env.OPENAI_ORGANIZATION_ID, // Optional
});

export default openai;
