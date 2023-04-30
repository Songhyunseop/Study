import { useMutation, gql } from "@apollo/client";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "송현섭", title: "제목", contents: "내용임") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const result = await createBoard();
    console.log(result);
  };
  // 1. onclick 같은 속성에 async, await 처럼 뭔가 기다리는 것은 들어갈 수 없기에 eslint 에러발생!
  // 2. 따라서 껍데기함수(wrapAsyncFunc)를 만들어 hof 식으로 활용해 그 안에서 실제 onClickSubmit 함수를 실행
  // 3. 껍데기 함수(wrapAsyncFunc)는 다른 컴포넌트에서도 공통적으로 사용 가능함으로 따로 분리해서 src에 저장하고 필요할 때마다 import 해 옴
  return (
    <button onClick={wrapAsyncFunc(onClickSubmit)}>GraphqlAPI 요청하기</button>
  );
}
