/** @format */

import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full py-3 px-4 bg-black sticky top-0 text-white flex gap-4 ">
      <Link href={"/"}>Home</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/hooks"}>Belajar Hooks</Link>
      <Link href={"/calculate"}>Calculator</Link>
      <Link href={"/ref"}>Ref</Link>
      <Link href={"/reducer"}>reducer</Link>
      <Link href={"/context"}>context</Link>
    </div>
  );
}
