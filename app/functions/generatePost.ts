import { generateTitle } from "./generateTitle";
import { generateArticle } from "./generateArticle";
import { generateImage } from "./generateImage";
import { createPost } from "~/models/post";

export const generatePost = async () => {
  const title = await generateTitle();

  const [markdown, image] = await Promise.all([
    generateArticle(title),
    generateImage("A beautiful modern photo of " + title + "."),
  ]);

  await createPost({ title, markdown, image: image ?? "" });
};
