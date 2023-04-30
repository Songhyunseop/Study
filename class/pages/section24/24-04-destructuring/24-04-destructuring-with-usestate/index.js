import { useState } from "react";

export default function CounterStatePage() {
  const result = useState(0); // result에 담음

  function onClickCountUp() {
    result[1](result[0] + 1); // result[0] = state, result[1] = setState
  }

  function onClickCountDown() {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!</button>
    </div>
  );
}
