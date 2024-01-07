import { gql, useApolloClient } from "@apollo/client";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LogInPage(): JSX.Element {
  // [UseQuery 사용 방식 3가지]
  //
  // 1. 페이지 접속하면 자동으로 data에 받아지고 해당 data를 apollo의 globalState에 저장
  // const { data } =
  // useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  //
  //
  //
  // 2. 버튼 클릭 시 data에 받아지고 해당 data를 apollo의 globalState에 저장
  // const [나의함수, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);
  //
  //
  //
  // 3. axios 처럼 사용하는 방법 ( data는 apollo GlobalState에 저장 )
  // const client = useApolloClient();
  // client.query(); // axios.get() 과 비슷한 방식

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });

    console.log(result);
  };

  return <button onClick={wrapAsyncFunc(onClickButton)}>클릭하세요</button>;
}
