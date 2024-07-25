/** @format */
"use client";
import { useUser } from "@/hooks/useUser";
import { TContextUser, TUser } from "@/types/user";
import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<TContextUser>(null);
export const TestContext = createContext<string | null>(null);

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

// export default function Provider({ children }: Props) {
//   const [counter, setCounter] = useState<number>(0);

//   const increment = () => setCounter(counter + 1);
//   const decrement = () => setCounter(counter - 1);

//   return (
//     <UserContext.Provider value>
//       <TestContext.Provider value={{ counter, increment, decrement }}>
//         {children}
//       </TestContext.Provider>
//     </UserContext.Provider>
//   );
// }

// export default function Page() {
//   const test = useContext(TestContext);
//   test.counter();
//   test.increment();
//   tst;

//   return <div>{test}</div>;
// }

// <Provider>
//   <Page />
// </Provider>;
