import { openai } from "~/root";

const topicPrompts = [
  "Generate a very interesting topic for a short blog post.",
  "Generate a very interesting topic for a short story.",
  "Generate a very interesting topic for a short article.",
  "Generate a title for a short story in a wonderland",
  "Generate a title about science fiction.",
  "Generate a mind-boggling topic about quantum physics.",
];

export const getTopic = async () => {
  const topicResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "Generate a mind-boggling topic about quantum physics.",
      },
    ],
    temperature: 0.5,
    max_tokens: 50,
    top_p: 1,
  });

  const topic = topicResponse.choices[0].message.content ?? "";
  return topic.slice(1, -1);
};
