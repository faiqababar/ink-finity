import { openai } from "~/root";

const topics = [
  "Generate a very interesting topic for a short blog post.",
  "Generate a very interesting topic for a short story.",
  "Generate a very interesting topic for a short article.",
  "Generate a title for a short story in a wonderland",
  "Generate a title about science fiction.",
  "Generate a mind-boggling topic about quantum physics.",
  "Generate a title about a fantasy world.",
  "Generate a title about a post-apocalyptic world.",
  "Generate a title about a world without humans.",
  "Generate a title about a world without animals.",
  "Generate a title about a world without plants.",
  "Generate a title about a world without water.",
  "Generate a title about a world without air.",
  "Generate a title about a world without gravity.",
  "Generate a title about a world without time.",
  "Generate a title about a world without space.",
  "Generate a title about a world without light.",
  "Generate a title about a world without darkness.",
  "Generate a title about a world without colors.",
  "Generate a title about a world without sound.",
  "Generate a title about a world without silence.",
  "Generate a title about a world without temperature.",
  "Generate a title about a world without movement.",
  "Generate a title about a world without life.",
  "Generate a title about a world without death.",
  "Generate a title about a world without birth.",
  "Generate a title about a world without change.",
  "Generate a title about a world without stability.",
  "Generate a title about a world without chaos.",
  "Generate a title about a world without order.",
  "Generate a title about a world without freedom.",
  "Generate a topic that will make the reader think.",
  "Generate a topic that will make the reader feel inspired.",
  "Generate a topic that will make the reader feel motivated.",
  "Generate a topic that will make the reader feel happy.",
  "Generate a topic that will make the reader feel sad.",
  "Generate a topic that will make the reader feel angry.",
];

export const generateTitle = async () => {
  const titleResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
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
