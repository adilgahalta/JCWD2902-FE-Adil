/** @format */
"use client";
import React, { createContext, useState } from "react";

type Props = { children: React.ReactNode };

export interface ICounter {
  value: number;
}

type ICounterContext = {
  counter: ICounter;
  increment: () => void;
  decrement: () => void;
} | null;

export const CounterContext = createContext<ICounterContext>(null);

export default function CounterProvider({ children }: Props) {
  const [counter, setCounter] = useState<ICounter>({ value: 0 });
  const increment = () => setCounter({ value: counter.value + 1 });
  const decrement = () => setCounter({ value: counter.value - 1 });

  const value = {
    counter,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
