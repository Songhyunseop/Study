import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
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

export default function StaticRoutingPage(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {/* 렌더링 과정에서 data가 없을 동안은 화면상에 map으로 뿌려지지 않기에 페이지네이션이 최상단에 위치해있다가 data가 들어오면
      그제서야 레이아웃이 규격에 맞게 잡히기 때문에 그닥 좋지 못한 방식이라고 볼 수 있음  */}

      {/* 따라서 아래와 같이 작성해서 data 가 없을 때도 map으로 그려내서 레이아웃이 변동되지 않도록 함 */}
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      {/* 여기는 new Array 메소드로 배열 생성해서 지정하는 map 함수 */}
      {new Array(10).fill("철수").map((_, idx) => (
        <span key={idx + 1} id={String(idx + 1)} onClick={onClickPage}>
          {idx + 1}
        </span>
      ))}
    </div>
  );
}
