import { defer, LoaderFunctionArgs } from "@remix-run/node";
import { Await, json, MetaFunction, useLoaderData } from "@remix-run/react";

import React, { Suspense } from "react";
import BlogPost from "~/components/BlogPost";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { getArticle } from "~/functions/getArticle";
import { getImage } from "~/functions/getImage";
import { getTopic } from "~/functions/getTopic";

const topic = "A beautiful modern photo of a sunset.";
const article =
  "However, it's important to approach this topic with a healthy dose of skepticism. The concept of the multiverse and interdimensional communication is still largely theoretical. It is based on our current understanding of quantum physics, which is constantly evolving. We must be cautious not to let our imaginations run wild without solid scientific evidence.";

const image =
  "https://oaidalleapiprodscus.blob.core.windows.net/private/org-qW6XZLleKvVesx5NjqxtahJ2/user-o4wAqqirnZiiFByrM3FxKcIO/img-AtPi6QgVv6dGn9vuR6G0fDu5.png?st=2024-02-04T06%3A19%3A23Z&se=2024-02-04T08%3A19%3A23Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-02-04T02%3A26%3A30Z&ske=2024-02-05T02%3A26%3A30Z&sks=b&skv=2021-08-06&sig=rV4B3KbujErozKJj54Bdpwi8jTpQLDG0Hr3QRZcpf7E%3D";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const topic = await getTopic();

  const [article, image] = await Promise.all([
    getArticle(topic),
    getImage("A beautiful modern photo of " + topic + "."),
  ]);

  return defer({
    blogPost: { topic, image, article },
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-[780px] flex flex-col p-4 overflow-auto justify-center items-center">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={data}>
          {(data) => {
            const { topic, article, image } = data.blogPost;
            return (
              <BlogPost topic={topic} article={article} image={image ?? ""} />
            );
          }}
        </Await>
      </Suspense>
      <Footer />
    </div>
  );
}
