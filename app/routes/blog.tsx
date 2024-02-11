import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export default function Blog() {
  return (
    <div className="w-[780px] flex flex-col p-4 overflow-auto justify-center items-center">
      <Header />
      <div className="flex flex-col gap-2 mt-2 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
