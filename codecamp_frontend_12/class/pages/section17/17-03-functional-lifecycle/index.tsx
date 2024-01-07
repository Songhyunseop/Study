import { useEffect, useState } from "react"; // Component를 import 하여 extends 로 상속해서 여러 기능을 사용 가능 (ex. setState 같은 기본 기능들)
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(100);
  const router = useRouter();

  //
  //
  // [componentDidMount + componentDidUpdate 와 동일한 개념]
  useEffect(() => {
    console.log("변경되고 나서 실행");
  }); // 의존성 배열 (dependency-array) => 해당 값이 변동되면 useEffect 실행 됨 (배열이 없다면 모든 변경사항을 감지하여 변경될 때마다 useeffect 실행됨)
  //
  //
  //
  // [componentDidMount 와 동일한 개념]
  useEffect(() => {
    console.log("변경되고 나서 실행");
    //
    // [componentWillUnmount 와 동일한 개념]
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []); // 의존성 배열이 비어 있는 경우 => 렌더링 될 때 한 번 실행되고 이후 실행되지 않음!
  //
  //
  //
  //
  //
  // useEffect 잘못된 사용법 (state의 특성상 추가렌더링이 발생할 수 있음 [가급적이면 이런 방식은 피하자!])
  // 무한루프에 빠질 수 있음 !! (1. 렌더링 후 useEffect 첫 실행 -> 2. state 값 변경으로 리렌더링 -> 3. 리렌더링 되면서 다시 useEffect 실행 -> ...4..)
  useEffect(() => {
    setCount((prev) => prev + 1);
  });
  //
  //
  const onClickCountUp = (): void => {
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  // render 함수 안에 html 코드 작성!

  console.log("나는 언제 실행되게 ?");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기!!</button>
    </>
  );
}
