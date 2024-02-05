import { openai } from "~/root";

export const generateArticle = async (topic: string) => {
  const articleResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "Write compelling and natural 800 words in english language in short paragraphs about " +
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
