/** @format */
"use client";
import { CounterContext } from "@/providers/counter.provider";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/redux/slices/counter.slice";
import { useAppDispatch } from "@/redux/store";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";

type Props = {};

export default function Page({}: Props) {
  const dispatch = useAppDispatch();
  const counterContext = useContext(CounterContext);

  return (
    <div className="flex flex-col gap-3">
      <center>
        <button
          className="bg-black text-white p-1 mr-2"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>

        <button
          className="bg-black text-white p-1 mr-2"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>

        <button
          className="bg-black text-white p-1 mr-2"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>

        <button
          className="bg-black text-white p-1 mr-2"
          onClick={() => dispatch(incrementByAmount(20))}
        >
          increment By Amount
        </button>
      </center>

      <center>
        <button
          className="bg-black text-white p-1 mr-2"
          onClick={() => counterContext?.decrement()}
        >
          decrement
        </button>

        <button
          className="bg-black text-white p-1 mr-2"
          onClick={() => counterContext?.increment()}
        >
          increment
        </button>
      </center>
    </div>
  );
}
