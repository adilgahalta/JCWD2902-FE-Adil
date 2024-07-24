/** @format */
"use client";
import { useUser } from "@/hooks/useUser";
import { TContextUser, TUser } from "@/types/user";
import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<TContextUser>(null);

export default function ContextProvider({ children }: Props) {
  const [user, reset, changeName, changeAvatar] = useUser();
  const nama = "Logo";
  const value = {
    user,
    reset,
    changeName,
    changeAvatar,
    nama,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
