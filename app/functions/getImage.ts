import { openai } from "~/root";

export const getImage = async (topic: string) => {
  const imageResponse = await openai.images.generate({
    prompt: "A beautiful modern photo of " + topic + ".",
    n: 1,
    size: "512x512",
    response_format: "url",
  });

  return imageResponse.data[0].url;
};
