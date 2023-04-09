import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import WriteContainer from "../../../../src/component/units/BoardWrite/BoardWrite.Container";

export default function BoardWrite() {
  const router = useRouter();

  const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
      fetchBoard(boardId: $boardId) {
        _id
        writer
        title
        contents
        images
      }
    }
  `;

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  return (
    <>
      <WriteContainer IsEdit={true} data={data} />
    </>
  );
}
