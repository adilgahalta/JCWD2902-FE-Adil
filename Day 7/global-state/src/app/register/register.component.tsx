/** @format */
"use client";
import { UserContext } from "@/providers/context.provider";
import React, { useContext } from "react";

type Props = {};

export default function RegisterComponent({}: Props) {
  const { nama, changeName } = useContext(UserContext)!;
  return (
    <div className="flex gap-2">
      <div>{nama}</div>
      <button
        className="bg-green-600 text-white p-5"
        onClick={() => changeName("wowo")}
      >
        nama jadi wowo
      </button>
      <button
        className="bg-green-600 text-white p-5"
        onClick={() => changeName("owi")}
      >
        nama jadi owi
      </button>
    </div>
  );
}
