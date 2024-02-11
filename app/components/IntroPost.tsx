import { removeQuotes } from "~/utils";
import cx from "classnames";

export const IntroPost = ({
  id,
  title: _title,
  image,
  markdown,
  middle = false,
}: {
  id: string;
  title: string;
  image: string;
  markdown: string;
  middle?: boolean;
}) => {
  const title = removeQuotes(_title);
  const body = markdown.replace(title, "");

  return (
    <a
      key={id}
      href={`/blog/post/${id}`}
      className="flex flex-col gap-1 bg-white p-2 items-left"
    >
      <img
        src={`data:image/jpeg;base64,${image}`}
        alt={title}
        className="w-full"
      />
      <p
        className={cx("text-md leading-5 font-bold mt-2", {
          "text-lg": middle,
        })}
      >
        {title}
      </p>
      <p className="text-xs text-gray-500 leading-5">
        {body.slice(0, middle ? 300 : 150) + "..."}
      </p>
    </a>
  );
};
