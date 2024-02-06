import { openai } from "~/root";

export const generateImage = async (topic: string) => {
  const imageResponse = await openai.images.generate({
    prompt: "A beautiful modern photo of " + topic + ".",
    n: 1,
    size: "512x512",
    response_format: "b64_json",
  });

  return imageResponse.data[0].b64_json;
};
