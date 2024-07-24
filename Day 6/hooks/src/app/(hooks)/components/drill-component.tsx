/** @format */
"use client";

import { useContext } from "react";
import { TUserState, UserContext } from "../context/page";

export function ComponentA() {
  return (
    <div>
      drill-component A
      <ComponentE />
      <ComponentB></ComponentB>
    </div>
  );
}

export function ComponentB() {
  const state = useContext<TUserState>(UserContext);

  return (
    <div>
      {state?.user}
      drill-component B<ComponentC></ComponentC>
    </div>
  );
}
export function ComponentC() {
  return (
    <div>
      drill-component C<ComponentD></ComponentD>
    </div>
  );
}
export function ComponentD() {
  const state = useContext<TUserState>(UserContext);
  return <div>drill-component D {state?.user}</div>;
}
export function ComponentE() {
  return <div>drill-component E</div>;
}
