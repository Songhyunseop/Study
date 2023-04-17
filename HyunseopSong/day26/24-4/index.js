import { useStateHook } from "../../../src/components/commons/hooks/useState";
import { onClickCount } from "../../../src/components/commons/hooks/Countup";

export default function QuizPage() {
  const result = useStateHook(0);
  const { ClickItMan, counting } = onClickCount(result);

  return (
    <>
      <div>
        <p>지금의 카운트는 {counting} 입니다!</p>
        <button onClick={ClickItMan}>Count up!</button>
      </div>
    </>
  );
}
