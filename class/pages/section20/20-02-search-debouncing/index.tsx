import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPage(): JSX.Element {
  // const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  //
  //
  //
  //
  //

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 1000); // 1초동안 변경값이 없다면 debounce 함수가 실행됨
  //
  //

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    // setSearch(event.currentTarget.value);
    getDebounce(event.currentTarget.value);
  };

  // const onClickSearch = (): void => {
  //   void refetch({ search, page: 1 });
  // };

  return (
    <div>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("철수").map((_, idx) => (
        <span key={idx + 1} id={String(idx + 1)} onClick={onClickPage}>
          {idx + 1}
        </span>
      ))}
    </div>
  );
}
