/** @format */
"use client";
import { UserContext } from "@/providers/context.provider";
import Link from "next/link";
import React, { useContext } from "react";
import { data } from "@/data.json";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { CounterContext } from "@/providers/counter.provider";

type Props = {};

export default function Navbar({}: Props) {
  const context = useContext(UserContext);
  const counter = useAppSelector((state) => state.counter);
  const konter = useSelector(
    (state: { kounter: { value: number } }) => state.kounter
  );
  const counterContext = useContext(CounterContext);
  return (
    <div className="w-full flex bg-black  text-white fixed justify-center">
      <div className="w-full max-w-screen-xl font-bold flex justify-between px-4 py-3">
        {context?.nama}
        {data.name}
        {counter.value}
        {konter.value}

        {counterContext?.counter.value}

        <div className={`gap-2 ${context?.user ? "hidden" : "flex"}`}>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>

        <div className={` gap-2 ${context?.user ? "flex" : "hidden"}`}>
          <div className="flex items-center"> {context?.user?.name}</div>
          <picture>
            <img
              src={context?.user?.avatar_url}
              alt=""
              className=" w-6 aspect-square rounded-full bg-white"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
