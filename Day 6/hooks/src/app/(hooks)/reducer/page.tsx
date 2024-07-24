/** @format */
"use client";
import React, { useReducer, useState } from "react";
import { actionType, reducer } from "../helpers/reducer";
import useCount from "../helpers/hooks";

type Props = {};

export default function ComponentUseReducer({}: Props) {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [count3, increment3, decrement3] = useCount(0, 1);

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment2 = () => dispatch({ type: actionType.INCREMENT, payload: 2 });
  const decrement2 = () => dispatch({ type: actionType.DECREMENT, payload: 2 });
  return (
    <div>
      <center className=" font-bold my-4 text-3xl ">
        {" "}
        without useReducer{" "}
      </center>

      <center className="">
        <button
          onClick={decrement}
          className=" py-2 px-4 rounded bg-black text-white"
        >
          -
        </button>
        <b className="mx-4 text-2xl">Count: {count}</b>
        <button
          onClick={increment}
          className=" py-2 px-4 rounded bg-black text-white"
        >
          +
        </button>
      </center>

      <center className=" font-bold my-4 text-3xl "> with useReducer </center>

      <center className="">
        <button
          onClick={decrement2}
          className=" py-2 px-4 rounded bg-black text-white"
        >
          -
        </button>
        <b className="mx-4 text-2xl">Count: {state.count}</b>
        <button
          onClick={increment2}
          className=" py-2 px-4 rounded bg-black text-white"
        >
          +
        </button>
      </center>

      <center className=" font-bold my-4 text-3xl "> with custom hook </center>

      <center className="">
        <button
          onClick={decrement3}
          className=" py-2 px-4 rounded bg-black text-white"
        >
          -
        </button>
        <b className="mx-4 text-2xl">Count: {count3}</b>
        <button
          onClick={increment3}
          className=" py-2 px-4 rounded bg-black text-white"
        >
          +
        </button>
      </center>
    </div>
  );
}
