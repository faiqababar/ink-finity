import { IntroPost } from "./IntroPost";

type BlogPost = {
  id: string;
  title: string;
  markdown: string;
  image: string;
};

export const IntroSection = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="flex gap-6 border-b border-2 border-black">
      <div className="flex flex-col gap-4 w-1/4">
        <IntroPost
          id={posts[1].id}
          title={posts[1].title}
          image={posts[1].image}
          markdown={posts[1].markdown}
        />
        <IntroPost
          id={posts[2].id}
          title={posts[2].title}
          image={posts[2].image}
          markdown={posts[2].markdown}
        />
      </div>
      <div className="flex flex-col w-1/2">
        <IntroPost
          id={posts[0].id}
          title={posts[0].title}
          image={posts[0].image}
          markdown={posts[0].markdown}
          middle
        />
      </div>
      <div className="flex flex-col gap-4 w-1/4">
        <IntroPost
          id={posts[3].id}
          title={posts[3].title}
          image={posts[3].image}
          markdown={posts[3].markdown}
        />
        <IntroPost
          id={posts[4].id}
          title={posts[4].title}
          image={posts[4].image}
          markdown={posts[4].markdown}
        />
      </div>
    </div>
  );
};
