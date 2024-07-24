"use client";
import { useUser } from "@/app/hooks/UseUser";
import React, { createContext } from "react";
type Props = {
  children: React.ReactNode;
};
export type TUser = {
  name: string;
  avatar_url: string;
} | null;

export type TContextUser = {
  user: TUser;
  reset: () => void;
  changeName: (name: string) => void;
  changeAvatar: (avatar_url: string) => void;
} | null;

const UserProvider = createContext<TContextUser>(null);

export default function Contextprovider({ children }: Props) {
  const [user, reset, changeName, changeAvatar] = useUser();
  return (
    <UserProvider.Provider value={{ user, reset, changeName, changeAvatar }}>
      {children}
    </UserProvider.Provider>
  );
}
