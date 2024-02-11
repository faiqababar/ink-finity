import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import { Suspense } from "react";
import BlogPost from "~/components/BlogPost";
import { generateArticle } from "~/functions/generateArticle";
import { generateCategories } from "~/functions/generateCategories";
import { generateImage } from "~/functions/generateImage";
import { generateTitle } from "~/functions/generateTitle";
import { createPost } from "~/models/post";
import { topics } from "~/utils";

export const loader = async () => {
  const topic = topics[Math.floor(Math.random() * topics.length)];

  const [title, categories] = await Promise.all([
    generateTitle(topic),
    generateCategories(topic),
  ]);

  const [markdown, image] = await Promise.all([
    generateArticle(title),
    generateImage(categories),
  ]);

  const categoriesArr = categories.split(",").map((c) => c.trim());

  await createPost({
    title,
    markdown,
    image: image ?? "",
    categories: categoriesArr,
  });

  return defer({
    post: {
      title,
      markdown,
      image,
      createdAt: new Date(),
      categories: categoriesArr,
    },
  });
};

export default function GeneratePost() {
  const data = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={data}>
        {(data) => {
          const { title, markdown, image, createdAt, categories } = data.post;
          return (
            <BlogPost
              title={title}
              markdown={markdown}
              image={image}
              createdAt={new Date(createdAt)}
              categories={categories}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}
