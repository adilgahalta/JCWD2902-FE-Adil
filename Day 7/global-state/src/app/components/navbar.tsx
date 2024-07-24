import Link from "next/link";
import React, { useContext } from "react";
// import { UserProvider } from "@/app/providers/context.provider";
type Props = {};

export default function Navbar({}: Props) {
  const context = useContext(null);
  return (
    <div className="w-full flex bg-black px-4 py-3 text-white fixed justify-center top-0 ">
      <div className="w-full max-w-screen-xl flex justify-between">
        Navbar
        <div className={"flex gap-4"}>
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
