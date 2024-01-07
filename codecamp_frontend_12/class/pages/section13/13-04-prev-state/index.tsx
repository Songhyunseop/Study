import { useState } from "react"; // useState 기능을 react에서 가져옴
// useState를 import로 가져와야 사용할 수 있음

export default function CounterStatePage(): JSX.Element {
  // let count = 0 // let 선언은 리액트 HTML에서 변경을 감지 못함 (사용 불가능)
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    setCount((prev) => {
      // count의 임시저장 공간 (prev) 로 들어가서 임시저장공간의 값을 지시한 대로 바꾼 후 return
      return prev + 1; // (임시저장공간) 에 데이터가 없을 경우 prev는 state의 초기값을 기준으로 함
    });
  }

  // function onClickCountDown(): void {
  //   setCount(count - 1);
  // }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기!!</button> */}
    </div>
  );
}
