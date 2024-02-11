import { CHAT_GPT_MODEL } from "~/constants";
import { openai } from "~/root";

export const generateTitle = async (topic: string) => {
  const titleResponse = await openai.chat.completions.create({
    model: CHAT_GPT_MODEL,
    messages: [
      {
        role: "user",
        content: topic,
      },
    ],
    temperature: 1,
    max_tokens: 50,
    top_p: 1,
  });

  return titleResponse.choices[0].message.content ?? "";
};
