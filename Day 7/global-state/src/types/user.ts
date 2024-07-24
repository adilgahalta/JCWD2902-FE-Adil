/** @format */

export type TUser = {
  name: string;
  avatar_url: string;
} | null;

export type TContextUser = {
  user: TUser;
  reset: () => void;
  changeName: (name: string) => void;
  changeAvatar: (avatar_url: string) => void;
  nama: string;
} | null;
