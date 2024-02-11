import { CHAT_GPT_MODEL } from "~/constants";
import { openai } from "~/root";

export const generateCategories = async (topic: string) => {
  const categoriesResponse = await openai.chat.completions.create({
    model: CHAT_GPT_MODEL,
    messages: [
      {
        role: "user",
        content:
          "Generate a short list of comma separated catgories for the topic " +
          topic,
      },
    ],
    temperature: 1,
    max_tokens: 50,
    top_p: 1,
  });

  return categoriesResponse.choices[0].message.content ?? "";
};
