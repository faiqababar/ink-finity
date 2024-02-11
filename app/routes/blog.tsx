import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export default function Blog() {
  return (
    <div className="w-full flex flex-col overflow-auto justify-center items-center">
      <Header />
      <div className="flex flex-col gap-2 mt-[80px] w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
