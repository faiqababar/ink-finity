import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

import BlogPost from "~/components/BlogPost";

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
    post: { title, markdown, image, createdAt },
  } = useLoaderData<typeof loader>();

  return (
    <BlogPost
      title={title}
      markdown={markdown}
      image={image}
      createdAt={createdAt}
    />
  );
}
