import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <h1 className="p-2 font-roboto text-3xl">Ink-finity</h1>
    </div>
  );
}
