import { useState } from "react"; // useState 기능을 react에서 가져옴
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";
// useState를 import로 가져와야 사용할 수 있음

export default function CounterStatePage(): JSX.Element {
  // let count = 0 // let 선언은 리액트 HTML에서 변경을 감지 못함 (사용 불가능)
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    setCount(count + 1);
  }

  return (
    // Child1 => setState 함수를 가져와서 사용하는 방식
    <div>
      <Child1 conut={count} setCount={setCount} />
      <div>=============================</div>
      Child2 부모의 함수를 가져와서 사용하는 방식
      <Child2 conut={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}
