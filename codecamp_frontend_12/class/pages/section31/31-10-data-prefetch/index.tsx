import { useQuery, gql, useApolloClient } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

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

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingPage(): JSX.Element {
  const client = useApolloClient();
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page: 1,
      },
    }
  );

  const onClickMove = (boardId: string) => () => {
    void router.push(`section31/31-10-data-prefetch-moved/${boardId}`);
  };
  //
  //
  // 마우스를 올리면 바로 fetch 요청이 들어가서 캐시(inMemory)에 저장되게 됨
  // 다만 이 설정으로는 각 게시글 제목에 마우스를 올리면 그 때마다 바로바로 fetch가 되기 때문에,
  // debounce를 이용해서 일정 시간 이상 마우스가 머무르고 있을 때에만 fetch가 되도록 설정하는 것이 좋음!!
  const prefetchBoard = (boardId: string) => async () => {
    await client.query({
      query: FETCH_BOARD,
      variables: {
        boardId,
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span
            onMouseOver={wrapAsyncFunc(prefetchBoard(el._id))}
            onClick={onClickMove(el._id)}
            style={{ margin: "10px" }}
          >
            {el.title}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
