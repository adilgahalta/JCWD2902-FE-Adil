/** @format */

import { useState } from "react";

const useCount = (
  val: number,
  step: number
): [number, () => void, () => void] => {
  const [count, setCount] = useState<number>(val);

  function increment() {
    setCount(count + step);
  }
  function decrement() {
    setCount(count - step);
  }

  return [count, increment, decrement];
};
export default useCount;
