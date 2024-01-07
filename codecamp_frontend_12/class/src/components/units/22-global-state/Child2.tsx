import { useState } from "react";
import { useRecoilState } from "recoil";
import { countState } from "../../../commons/stores";

export default function Child2(): JSX.Element {
  const [count, setCount] = useRecoilState(countState);
  //

  const onClickCountUp = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>자식2의 카운트 :{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
    </div>
  );
}
