import { topics } from "~/utils";
import { generateTitle } from "./generateTitle";
import { generateCategories } from "./generateCategories";
import { generateArticle } from "./generateArticle";
import { generateImage } from "./generateImage";
import { createPost } from "~/models/post";

export const generatePost = async () => {
  const topic = topics[Math.floor(Math.random() * topics.length)];

  const title = await generateTitle(topic);
  const categories = await generateCategories(title);
  const [markdown, image] = await Promise.all([
    generateArticle(title),
    generateImage(categories),
  ]);

  const categoriesArr = categories
    .split(",")
    .map((c) => c.replace('"', "").trim());

  await createPost({
    title,
    markdown,
    image: image ?? "",
    categories: categoriesArr,
  });

  return {
    title,
    markdown,
    image,
    createdAt: new Date(),
    categories: categoriesArr,
  };
};
