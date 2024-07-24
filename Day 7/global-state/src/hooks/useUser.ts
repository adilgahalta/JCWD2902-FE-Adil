/** @format */

import { init } from "@/constant/user";
import { TUser } from "@/types/user";
import { useState } from "react";

export const useUser = (): [
  user: TUser,
  reset: () => void,
  changeName: (name: string) => void,
  changeAvatar: (avatar_url: string) => void
] => {
  const [user, setUser] = useState<TUser>(null); //declare state user

  const reset = () => setUser(null); //reset data user
  const changeName = (name: string) => setUser({ ...user, name } as TUser); //untuk ganti nama
  const changeAvatar = (avatar_url: string) =>
    setUser({ ...user, avatar_url } as TUser); //untuk ganti avatar

  return [user, reset, changeName, changeAvatar];
};
