import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <a
      href={"/posts"}
      className="flex flex-col w-full justify-center items-center bg-white border-[1.5px] border-black rounded-lg py-4 px-2"
    >
      <h1 className="text-3xl">Ink-finity</h1>
      <div className="flex flex-row  gap-2 items-center justify-center">
        <h1 className="text-lg">
          A blog inspired by perpetual motion in Physics, written by AI
        </h1>
        <FontAwesomeIcon
          className="mb-0.5"
          height={20}
          width={20}
          icon={faRobot}
        />
      </div>
    </a>
  );
};
