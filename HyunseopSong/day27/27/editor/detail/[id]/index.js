import { gql, useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";

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

export default function () {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  console.log(data);

  return (
    <>
      <div>{data?.fetchBoard.writer}</div>
      <div>{data?.fetchBoard.title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.fetchBoard.contents,
        }}
      />
    </>
  );
}
