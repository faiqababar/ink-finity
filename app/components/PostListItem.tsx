import { removeQuotes } from "~/utils";

export const PostListItem = ({ id, title: _title, image, markdown }: any) => {
  const title = removeQuotes(_title);
  const body = markdown.replace(title, "");

  return (
    <a key={id} href={`/blog/post/${id}`} className="flex gap-2 bg-white p-2">
      <img
        src={`data:image/jpeg;base64,${image}`}
        alt={title}
        width={100}
        height={100}
      />
      <div className="flex leading-4 flex-col gap-1 justify-start items-start max-w-[600px]">
        <p className="text-lg font-bold">{removeQuotes(title)}</p>
        <p className="text-xs text-gray-500">{body.slice(0, 300) + "..."}</p>
      </div>
    </a>
  );
};
