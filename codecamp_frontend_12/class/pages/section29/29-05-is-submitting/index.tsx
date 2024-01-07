import axios from "axios";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  //
  // [게시글 등록하기 버튼]이라고 가정
  // useState의 값은 함수가 종료된 이후에만 실질적으로 변경이 됨으로, 이 onClickSync 함수는 사실 값이 변경되지 않고 false 그대로인 것이나 마찬가지지만,
  // 실제로는 true로 바뀌었다가 다시 false로 바뀐다. (그 원인은 ???) [그 원인은 async - await 로직 원리에 있음]
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data);
    setIsSubmitting(false);
  };
  // onClickSync 함수가 await을 만나는 순간 이 await을 감싸는 async 함수는 Micro 큐로 넘어감.(여기서 함수가 한 번 끝난걸로 처리됨(IsSubmitting의 값이 true로 변경된 이유))
  // 이후 큐에서 다시 스택으로 넘어가 함수를 처리하면서 isSubmitting 이 다시 false로 값이 변경됨
  //
  //
  //
  //
  // +a) await의 기다리는 원리는 사실 큐에 들어갈 때 await 뒤의 axios.get이 먼저 들어가고, 그 다음 onClickSync 함수가 들어가기 때문에
  // axios.get이 큐에서 빠져나가기 전까지는 onClickSync가 실행될 수 없기 때문에 마치 기다리는 것처럼 로직이 구현되는 것이었음!!!
  return (
    <div>
      <button disabled={isSubmitting} onClick={wrapAsyncFunc(onClickSync)}>
        REST-API(동기) 요청
      </button>
    </div>
  );
}
