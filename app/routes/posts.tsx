import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { getPosts } from "~/models/post";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="w-[780px] flex flex-col p-4 overflow-auto justify-center items-center">
      <Header />
      <div className="flex flex-col gap-2 mt-2 w-full">
        {posts?.map(({ id, title, image }) => {
          return (
            <a
              href={`/post/${id}`}
              className="flex gap-2 bg-white p-2 items-center rounded-md border-[1.5px] border-black"
            >
              <img src={image} alt="post-image" width={50} height={50} />
              <p className="text-md">{title}</p>
            </a>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
