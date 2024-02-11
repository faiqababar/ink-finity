import { CHAT_GPT_MODEL } from "~/constants";
import { openai } from "~/root";

export const generateArticle = async (topic: string) => {
  const articleResponse = await openai.chat.completions.create({
    model: CHAT_GPT_MODEL,
    messages: [
      {
        role: "system",
        content:
          "Write an interesting, explorative, philosophical and unconventional blog post about 1200 words in short paragraphs about " +
          topic,
      },
    ],
    temperature: 0.5,
    top_p: 1,
  });

  return articleResponse.choices
    .map((choice) => choice.message.content)
    .join(" ");
};
