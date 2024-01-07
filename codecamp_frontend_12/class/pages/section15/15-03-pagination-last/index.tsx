// 첫페이지, 마지막페이지  지정된 상태 (1페이지에서 이전 페이지로 안 넘어감, 마지막페이지에서 다음 페이지 조회 안되게 지정)

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react"; // type 지정(?)
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingPage(): JSX.Element {
  const [startPage, setStartPage] = useState(1); // 1, 11, 21, 31 ... 각 페이지의 시작페이지

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); // fetchboards에서 refetch도 뽑아올 수 있음

  const { data: data2 } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const LastPage = Math.ceil((data2?.fetchBoardsCount ?? 10) / 10);

  // 함수안에 refetch() 가져와서 함수 실행될 때마다 refetch 되도록 지정
  // void로 지정 시 기다리지 않고 함수는 끝나버림, // async, await 지정 시 요청의 응답을 받을때 까지 기다린 후 함수 종료
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) }); // variables 키 생략
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= LastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {/* 여기는 new Array 메소드로 배열 생성해서 지정하는 map 함수 */}
      {new Array(10).fill("철수").map((_, idx) =>
        idx + startPage <= LastPage ? (
          <span
            key={idx + startPage}
            id={String(idx + startPage)}
            onClick={onClickPage}
          >
            {idx + startPage}
          </span>
        ) : undefined
      )}
      <span onClick={onClickNextPage}>다음페이지</span>

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
