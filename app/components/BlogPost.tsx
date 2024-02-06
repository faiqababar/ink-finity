import React from "react";
import { removeQuotes } from "~/utils";

type BlogPostProps = {
  title: string;
  markdown: string;
  image?: string;
};

export default function BlogPost({ title, markdown, image }: BlogPostProps) {
  return (
    <div className="flex bg-white mt-4 flex-col justify-center items-center w-full border-black border-[1.5px] rounded-lg p-2">
      <p className="p-2 font-roboto font-semibold text-md text-center">
        {removeQuotes(title)}
      </p>
      <img
        className="mt-2"
        src={`data:image/jpeg;base64,${image}`}
        width={400}
        height={400}
        alt={title}
      />
      <div className="mt-4 leading-4">
        {markdown
          .split("\n")
          .slice(1)
          .map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </div>

      <p className="mt-4">Word count: {markdown.split(" ").length}</p>
    </div>
  );
}
