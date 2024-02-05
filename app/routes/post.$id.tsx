import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

import BlogPost from "~/components/BlogPost";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { getPost } from "~/models/post";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;

  if (!id)
    return new Response("Post with current id not found", { status: 404 });

  const post = await getPost(id);

  return json({
    post,
  });
};

export default function Post() {
  const {
    post: { title, markdown, image },
  } = useLoaderData<typeof loader>();

  return (
    <div className="w-[780px] flex flex-col p-4 overflow-auto justify-center items-center">
      <Header />

      <BlogPost title={title} markdown={markdown} image={image} />

      <Footer />
    </div>
  );
}
