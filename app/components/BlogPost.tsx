import React from "react";

type BlogPostProps = {
  topic: string;
  article: string;
  image: string;
};

export default function BlogPost({ topic, article, image }: BlogPostProps) {
  return (
    <div className="flex bg-white mt-4 flex-col justify-center items-center w-full border-black border-[1.5px] rounded-lg p-2">
      <p className="p-2 font-roboto font-semibold text-md text-center">
        {topic}
      </p>
      <img
        className="mt-2"
        src={image}
        width={400}
        height={400}
        alt="auto-generated-image"
      />
      <div className="mt-4 leading-4 text-center">
        {article
          .split("\n")
          .slice(1)
          .map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </div>

      <p className="mt-4">Word count: {article.split(" ").length}</p>
    </div>
  );
}
