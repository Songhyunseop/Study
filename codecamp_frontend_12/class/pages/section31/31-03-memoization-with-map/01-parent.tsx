import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationWithMapParentPage(): JSX.Element {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다");

  const onClickChange = (): void => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다");
  };

  return (
    <>
      {/* 1. props로 넘겨서 el또는 key 값이 변경될 때만 자식컴포넌트가 렌더링 되게 설정함 */}
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} />
      ))} */}
      {/* //
      //
      // */}
      {/* 2. memo를 해도 key 자체가 매번 변경되어서 props로 넘어가기 때문에 의존성에 상관없이 모두 다 리렌더링되어버림 (uuidv4의 문제점) */}
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4} el={el} />
      ))}

      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
