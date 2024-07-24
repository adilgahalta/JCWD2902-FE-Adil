/** @format */
"use client";
import React, { createContext, useState } from "react";
import { ComponentA } from "../components/drill-component";

type Props = {};
export type TUserState = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
} | null;
export const UserContext = createContext<TUserState>(null);

export default function Page({}: Props) {
  const [user, setUser] = useState<string>("john doe");
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

//useCallback vs useMemo
