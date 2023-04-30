import { useCallback, useMemo, useState } from "react";
import MemoizationWithChildPage from "./02-child";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트가 렌더링 되었습니다");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수의 값을 기억
  const aaa = useMemo(() => Math.random(), []); // useMemo 로 결과값 기억
  console.log(aaa);

  // 2. useCallback 으로 함수 기억 (함수를 기억)
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 2. useCallback 으로 함수 기억 (함수를 기억)
  const onClickCountState = useCallback((): void => {
    setCountState((prev) => prev + 1); // useCallback 은 state의 값 자체도 기억하기 때문에 prev로 임시저장소에서 그때그때 꺼내오는 방식을 사용!! (prev를 써야하는 이유!)
  }, []);
  //
  //
  //
  //
  //
  //
  //
  //
  // 3. useMemo 로 나만의 useCallback 만들어보기 (useCallback 이 있음으로 굳이 이렇게 만들어 사용하지는 않음!!)
  //   const onClickCountState2 = useMemo(
  //     () => (): void => {
  //       setCountState((prev) => prev + 1);
  //     },
  //     []
  //   );

  return (
    <>
      <div>=========================</div>
      <h1>저는 부모 컴포넌트 입니다</h1>
      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트 (let) +1 올리기</button>
      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트 (state) +1 올리기</button>
      {/* 4. 아래와 같이 작성도 가능하나 유지보수가 어렵고, 메모이제이션이 더 복잡해짐으로 잘 사용하지는 않음 */}
      {/* <div>카운트(state): {countState}</div>
      <button
        onClick={useCallback((): void => {
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트 (state) +1 올리기
      </button> */}
      <div>=========================</div>
      <MemoizationWithChildPage qqq={countState} />
      {/* 컴포넌트 째로 기억하는 경우 props가 의존성배열이 됨 (react에서 memo import해서 사용할 시) */}
    </>
  );
}
