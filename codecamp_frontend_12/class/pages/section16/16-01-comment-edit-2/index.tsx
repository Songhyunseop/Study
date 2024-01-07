import { useQuery, gql } from "@apollo/client";
import { useState, MouseEvent } from "react";
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
//
//
//
// 게시글 목록에서 선택한 요소만 input 창으로 바뀌게 만들어 입력가능하게 하는 로직

export default function StaticRoutingPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page: 1,
      },
    }
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    // setMyIndex(Number(event.currentTarget.id));
    //
    const qqq = myIndex; // (얕은 복사)
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, idx) =>
        myIndex[index] === false ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={String(idx)} onClick={onClickEdit}></button>
          </div>
        ) : (
          <input type="text" />
        )
      )}
    </div>
  );
}
