/** @format */
"use client";
import { init } from "@/constant/user";
import { UserContext } from "@/providers/context.provider";
import { TUser } from "@/types/user";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const [input, setInput] = useState<TUser>(null);
  const context = useContext(UserContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.id]: e.target.value } as TUser);
  };

  useEffect(() => {
    console.log(input);
    localStorage.setItem("input", JSON.stringify(input));
  }, [input]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <input
            type="text"
            id="name"
            className="border"
            onChange={handleChange}
          />{" "}
          <button
            className="bg-black text-white px-2 py-1"
            onClick={() => context?.changeName(input?.name!)}
          >
            change name
          </button>
        </div>

        <div>
          <input
            type="text"
            id="avatar_url"
            className="border"
            onChange={handleChange}
          />{" "}
          <button
            className="bg-black text-white px-2 py-1"
            onClick={() => context?.changeAvatar(input?.avatar_url!)}
          >
            change avatar
          </button>
        </div>
      </div>
    </div>
  );
}
