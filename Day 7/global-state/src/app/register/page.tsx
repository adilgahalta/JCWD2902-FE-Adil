/** @format */
import { UserContext } from "@/providers/context.provider";
import React, { useContext } from "react";
import RegisterComponent from "./register.component";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      ini ssr
      <RegisterComponent />
    </>
  );
}
