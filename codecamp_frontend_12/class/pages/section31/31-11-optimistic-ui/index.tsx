import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUiPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: "6449bf23aef9f000281ba272",
      },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = (): void => {
    void likeBoard({
      variables: {
        boardId: "6449bf23aef9f000281ba272",
      },
      // 방법 1.
      // refetchQueries: [{...}]
      //
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1, // fetch로 받아오는 카운트 값에서 1을 더하기 (DB 전송과 동시에 미리 보여주기용 속임수)
      },
      // 방법 2.
      update: (cache, { data }) => {
        // cache.modify -> 기존의 있는 값에서 수정
        // cache.writerQuery -> 없는 값을 직접 작성해서 수정 (일반 수정또한 가능)
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6449bf23aef9f000281ba272" },
          data: {
            fetchBoard: {
              _id: "6449bf23aef9f000281ba272", // 반드시 있어야 하는 필수값
              _typename: "Board", // 반드시 있어야 하는 필수값

              likeCount: data?.likeBoard, // 좋아요 개수 수정
            },
          },
        });
      },
    });
  };

  return (
    <>
      <h1>게시글 상세페이지 입니다!!!</h1>
      <div>현재카운트(좋아요):{data?.fetchBoard.likeCount} </div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
