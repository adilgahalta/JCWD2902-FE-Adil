import { TUser } from "@/app/providers/context.provider";
import { useState } from "react";
export const useUser = (): [
  user: TUser,
  reset: () => void,
  changeName: (name: string) => void,
  changeAvatar: (avatar_url: string) => void
] => {
  const init: TUser = {
    name: "",
    avatar_url:
      "https://cdn.antaranews.com/cache/1200x800/2023/06/18/20230618_080945.jpg",
  };
  const [user, setUser] = useState<TUser>({ ...init });
  const reset = () => setUser(init);
  const changeName = (name: string) => setUser({ ...user, name } as TUser);
  const changeAvatar = (avatar_url: string) =>
    setUser({ ...user, avatar_url } as TUser);
  return [user, reset, changeName, changeAvatar];
};
