import { useState } from "react";

export function useStateHook(value) {
  const [count] = useState(value);

  const setCountInitial = () => {
    return count;
  };

  return setCountInitial();
}
