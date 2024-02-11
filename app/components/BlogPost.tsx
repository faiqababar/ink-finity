import React from "react";
import { getMinuteRead, removeQuotes } from "~/utils";

type BlogPostProps = {
  title: string;
  markdown: string;
  createdAt: Date;
  image?: string;
};

export default function BlogPost({
  title,
  markdown,
  image,
  createdAt,
}: BlogPostProps) {
  return (
    <div className="flex bg-white flex-col justify-center items-center w-full p-4">
      <p className="font-bold text-3xl py-4 text-center border-b-black border-b-2">
        {removeQuotes(title)}
      </p>

      <div className="flex gap-2 mt-3">
        <span>{createdAt.toLocaleString().split("T")[0]}</span>
        <span> | </span>
        <span>{getMinuteRead(markdown)} minute read</span>
      </div>
      <img
        className="mt-4 px-16"
        src={`data:image/jpeg;base64,${image}`}
        alt={title}
        height={600}
        width={900}
      />
      <div className="mt-4 text-sm leading-4 text-gray-700 px-10">
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
    </div>
  );
}
