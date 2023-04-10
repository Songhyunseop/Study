import BoardFn from "../../../../src/components/units/Boardwrite/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function EditBoard() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  return (
    <div>
      <BoardFn isEdit={true} data={data} />
    </div>
  );
}
