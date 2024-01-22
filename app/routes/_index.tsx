import { LoaderFunctionArgs } from "@remix-run/node";
import { json, MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

import OpenAI from "openai";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const topicResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "Generate a random topic for a short story.",
      },
    ],
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1,
  });

  const topic = topicResponse.choices[0].message.content;

  const articleResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "Write exactly 300 words about " + topic + ".",
      },
    ],
    temperature: 0.5,
    top_p: 1,
  });

  const imageResponse = await openai.images.generate({
    prompt: "A beautiful colorful photo of " + topic + ".",
    n: 1,
    size: "512x512",
    response_format: "b64_json",
  });

  const image = imageResponse.data[0].b64_json;

  return json({
    image,
    topic,
    article: articleResponse.choices
      .map((choice) => choice.message.content)
      .join(" "),
  });
};

export default function Index() {
  const { topic, article, image } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
      <h1 className="p-2 font-roboto text-3xl">Ink-finity</h1>

      <img
        src={`data:image/jpeg;base64,${image}`}
        width={200}
        height={200}
        alt="auto-generated-image"
      />
      <p className="p-2 font-roboto text-sm">{topic}</p>
      <p className="p-2 font-roboto text-sm">{article}</p>

      <p>Word count: {article.split(" ").length}</p>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "Ink-finity" },
    { name: "Ink-finity", content: "The ink-finity blog" },
  ];
};
