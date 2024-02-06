import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

import { Suspense } from "react";
import BlogPost from "~/components/BlogPost";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { generateArticle } from "~/functions/generateArticle";
import { generateImage } from "~/functions/generateImage";
import { generateTitle } from "~/functions/generateTitle";
import { createPost } from "~/models/post";

export const loader = async () => {
  const title = await generateTitle();

  const [markdown, image] = await Promise.all([
    generateArticle(title),
    generateImage("A beautiful modern photo of " + title + "."),
  ]);

  await createPost({ title, markdown, image: image ?? "" });

  return defer({
    post: { title, markdown, image },
  });
};

export default function GeneratePost() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-[780px] flex flex-col p-4 overflow-auto justify-center items-center">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          {(data) => {
            const { title, markdown, image } = data.post;
            return <BlogPost title={title} markdown={markdown} image={image} />;
          }}
        </Await>
      </Suspense>
      <Footer />
    </div>
  );
}
