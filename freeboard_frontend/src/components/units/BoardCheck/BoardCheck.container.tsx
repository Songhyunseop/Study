import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardCheck.queries";
import Writing from "./BoardCheck.presenter";

export default function WriteBoard(props) {
  const [IsVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [error, setError] = useState("");

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [DislikeBoard] = useMutation(DISLIKE_BOARD);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    router.push("/best-list");
  }

  const getList = () => {
    router.push("/best-list");
  };

  const getEdit = () => {
    router.push(`/board-page1/${router.query.number}/edit`);
  };

  const getDelete = async () => {
    if (!modalIsOpen) {
      try {
        await deleteBoard({
          variables: {
            boardId: router.query.number,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD,

              variables: { boardId: router.query.number },
            },
          ],
        });
        openModal();
      } catch (error) {
        setError(error.message);
        setIsOpen(true);
      }
    }
    // router.push("/delete-complete")
  };

  const toggleVisible = () => {
    setIsVisible(!IsVisible);
  };

  const LikeCLick = async () => {
    const result = await likeBoard({
      variables: {
        boardId: router.query.number,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.number,
          },
        },
      ],
    });
  };

  const DislikeCLick = async () => {
    await DislikeBoard({
      variables: {
        boardId: router.query.number,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query.number,
          },
        },
      ],
    });
  };

  console.log("hellooooooooo");
  console.log(data?.fetchBoard.images);

  return (
    <div>
      <Writing
        data={data}
        toggleVisible={toggleVisible}
        IsVisible={IsVisible}
        getList={getList}
        getEdit={getEdit}
        getDelete={getDelete}
        cmtEdit={props.cmtEdit}
        LikeCLick={LikeCLick}
        DislikeCLick={DislikeCLick}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
}
