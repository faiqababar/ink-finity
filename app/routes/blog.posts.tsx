import { json, useLoaderData } from "@remix-run/react";
import { IntroPost } from "~/components/IntroPost";
import { IntroSection } from "~/components/IntroSection";
import { PostListItem } from "~/components/PostListItem";
import { INRO_POSTS_COUNT } from "~/constants";

import { getPosts } from "~/models/post";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  const introPosts = posts?.slice(0, INRO_POSTS_COUNT) ?? [];

  return (
    <div className="px-16 py-4">
      {introPosts.length === INRO_POSTS_COUNT && (
        <IntroSection posts={introPosts?.slice(0, INRO_POSTS_COUNT)} />
      )}
      <div className="flex flex-col gap-6 mt-8">
        {posts
          ?.slice(INRO_POSTS_COUNT)
          ?.map(({ id, title: _title, image, markdown }) => (
            <PostListItem
              id={id}
              title={_title}
              image={image}
              markdown={markdown}
            />
          ))}
      </div>
    </div>
  );
}
