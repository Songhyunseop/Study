import { useQuery, gql } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/components/units/16-comment-item";

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

// map 함수와 반복생성되는 요소 컴포넌트의 분리 [여기는 맵 함수만]

export default function StaticRoutingPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    // CommentItem 이라는 컴포넌트를 map 함수로 반복생성 (각 요소 하나하나가 CommentItem이 됨)
    <div>
      {data?.fetchBoards.map((el) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
