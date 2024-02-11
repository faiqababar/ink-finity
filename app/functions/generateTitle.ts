import { CHAT_GPT_MODEL } from "~/constants";
import { openai } from "~/root";
import { topics } from "~/utils";

export const generateTitle = async () => {
  const titleResponse = await openai.chat.completions.create({
    model: CHAT_GPT_MODEL,
    messages: [
      {
        role: "user",
        content: topics[Math.floor(Math.random() * topics.length)],
      },
    ],
    temperature: 1,
    max_tokens: 50,
    top_p: 1,
  });

  const title = titleResponse.choices[0].message.content ?? "";
  return title;
};
