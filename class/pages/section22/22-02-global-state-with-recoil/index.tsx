import Child1 from "../../../src/components/units/22-global-state/Child1";
import Child2 from "../../../src/components/units/22-global-state/Child2";
import { useRecoilState } from "recoil";
import { countState } from "../../../src/commons/stores";

export default function GlobalStateWithRecoilPage(): JSX.Element {
  const [count, setCount] = useRecoilState(countState);
  //

  const onClickCountUp = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>페이지의 카운트 :{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!</button>
      ======================================================
      <Child1 />
      ======================================================
      <Child2 />
    </div>
  );
}
