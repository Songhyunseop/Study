import { gql, useMutation, useQuery } from "@apollo/client";

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

export default function OptimisticPage() {
  //

  const [likeBoard] = useMutation(LIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6449bf23aef9f000281ba272",
    },
  });

  const onClickLikeCount = () => {
    console.log(data);
    likeBoard({
      variables: {
        boardId: "6449bf23aef9f000281ba272",
      },

      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6449bf23aef9f000281ba272" },
          data: {
            fetchBoard: {
              _id: "6449bf23aef9f000281ba272",
              _typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <button onClick={onClickLikeCount}>좋아요!!</button>
      <div>좋아요 카운트: {data?.fetchBoard.likeCount}</div>
    </>
  );
}

//       update: (cache, { data }) => {
//         // cache.modify -> 기존의 있는 값에서 수정
//         // cache.writerQuery -> 없는 값을 직접 작성해서 수정 (일반 수정또한 가능)
//         cache.writeQuery({
//   query: FETCH_BOARD,
//   variables: { boardId: "6449bf23aef9f000281ba272" },
//   data: {
//     fetchBoard: {
//       _id: "6449bf23aef9f000281ba272", // 반드시 있어야 하는 필수값
//       _typename: "Board", // 반드시 있어야 하는 필수값

//       likeCount: data?.likeBoard, // 좋아요 개수 수정
//     },
//   },
//         });
//       },
//     });
//   };

//   return (
//     <>
//       <h1>게시글 상세페이지 입니다!!!</h1>
//       <div>현재카운트(좋아요):{data?.fetchBoard.likeCount} </div>
//       <button onClick={onClickLike}>좋아요 올리기</button>
//     </>
//   );
// }
