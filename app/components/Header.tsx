import cx from "classnames";

export const Header = () => {
  return (
    <a
      href={"/blog/posts"}
      className={cx(
        "fixed flex flex-col w-full justify-center items-center bg-white border-t-[1.5px] border-black py-4 px-2 left-0 top-0 right-0 z-20"
      )}
    >
      <h1 style={{ fontVariant: "small-caps" }} className="text-4xl">
        Ink-finity
      </h1>
      <h1 className="text-sm mt-1 text-gray-800">
        A blog inspired by perpetual motion in Physics, written by AI
      </h1>
    </a>
  );
};
