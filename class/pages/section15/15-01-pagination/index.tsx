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
  }); // fetchboards에서 refetch도 뽑아올 수 있음

  // 함수안에 refetch() 가져와서 함수 실행될 때마다 refetch 되도록 지정
  // void로 지정 시 기다리지 않고 함수는 끝나버림, // async, await 지정 시 요청의 응답을 받을때 까지 기다린 후 함수 종료
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
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

      {/* 여기는 id값을 index로 지정한 map 함수
      {["철수", "철수", "철수", "철수", "철수", "철수"].map((_, idx) => (
        <span key={idx + 1} id={String(idx + 1)} onClick={onClickPage}>
          {idx + 1}
        </span>
      ))} */}

      {/* 여기는 id 값을 el로 지정한 map 함수 */}
      {/* {[1, 2, 3].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}
    </div>
  );
}
