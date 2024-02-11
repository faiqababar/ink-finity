import { json, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post";
import { removeQuotes } from "~/utils";

export const loader = async () => {
  return json(
    { posts: await getPosts() },
    {
      headers: { "Cache-Control": "public, max-age=3600" },
    }
  );
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <>
      {posts?.map(({ id, title, image }) => {
        return (
          <a
            key={id}
            href={`/blog/post/${id}`}
            className="flex gap-2 bg-white p-2 items-center rounded-md border-[1.5px] border-black"
          >
            <img
              src={`data:image/jpeg;base64,${image}`}
              alt={title}
              width={50}
              height={50}
            />
            <p className="text-md">{removeQuotes(title)}</p>
          </a>
        );
      })}
    </>
  );
}
