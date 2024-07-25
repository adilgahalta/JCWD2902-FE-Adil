/** @format */
import { UserContext } from "@/providers/context.provider";
import React, { useContext } from "react";
import RegisterComponent from "./register.component";
import { data } from "@/data.json";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      ini ssr
      {data.name}
      <RegisterComponent />
    </>
  );
}
