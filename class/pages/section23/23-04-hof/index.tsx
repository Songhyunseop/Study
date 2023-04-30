import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
// HOF 사용법!!
export default function StaticRoutingPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });
  //
  // page를 더 이상 event를 통해 받지 않고, HOF를 이용해 상위 함수에서 매개변수로 받아 그 값을 활용하는 방식!!
  const onClickPage = (page: number) => (): void => {
    void refetch({ page: page });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {new Array(10).fill("철수").map((_, idx) => (
        <span key={idx + 1} onClick={onClickPage(idx + 1)}>
          {" "}
          onClickpage 함수는 리액트가 대신 실행해주는 것으로 사실상 실행되면
          `onClickpage()` 로 실행되는 것// // 원래는 id 키를 넣고 id의 값으로
          idx 주었으나 HOF를 사용해 idx 값을 매개변수로 바로 넘김
          {idx + 1}
        </span>
      ))}
    </div>
  );
}
