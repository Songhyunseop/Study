import { useState } from "react";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    // 1. 화살표함수
    // setCount((prev)=> prev+1)

    // 2. 함수 선언식
    // setCount(function (prev) {
    //   return prev + 1;
    //   // 함수니까 로직 추가 가능
    // });

    // 3. 매개변수 바꾸기
    setCount((countNumber) => countNumber + 1);
  }

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
    </div>
  );
}
