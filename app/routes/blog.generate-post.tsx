import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import { Suspense } from "react";
import BlogPost from "~/components/BlogPost";

import { generatePost } from "~/functions/generatePost";

export const loader = async () => {
  const post = await generatePost();

  return defer({
    post,
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
