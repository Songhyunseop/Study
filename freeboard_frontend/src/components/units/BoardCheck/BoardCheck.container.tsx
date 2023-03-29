import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardCheck.queries";
import Writing from "./BoardCheck.presenter";

export default function WriteBoard(props) {
  const [IsVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const getList = () => {
    router.push("/best-list");
  };

  const getEdit = () => {
    router.push(`/board-page1/${router.query.number}/edit`);
  };

  const getDelete = async () => {
    // refetch 후 화면상에 리렌더링 안됨... 뭐가 문제 ??

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

    // router.push("/delete-complete")
  };

  const toggleVisible = () => {
    setIsVisible(!IsVisible);
  };

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
      />
    </div>
  );
}
