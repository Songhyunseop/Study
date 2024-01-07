import { useCallback, useMemo, useState } from "react";
import ChildPage from "./Child";

export default function MemoizationPage() {
  let letCount = 0;
  const [stateCount, setStateCount] = useState(0);

  console.log("은제 렌더링이 되는고 ?");

  const ClickLet = useCallback(() => {
    letCount += 1;
  }, []);

  // const ClickState = useCallback(() => {
  //   setStateCount((prev) => prev + 1);
  // }, []);

  // const ClickState = useMemo(() => () => setStateCount((prev) => prev + 1), []);

  return (
    <>
      <ChildPage />
      <button onClick={ClickLet}>let 버튼: </button>
      <div>{letCount}</div>
      <button
        onClick={useMemo(() => () => setStateCount((prev) => prev + 1), [])}
      >
        state 버튼:
      </button>
      <div>{stateCount}</div>
    </>
  );
}
