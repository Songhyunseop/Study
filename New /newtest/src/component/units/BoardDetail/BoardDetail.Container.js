import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailPresenter from "./BoardDetail.Presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.query";

export default function DetailContainer() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  console.log("imgchk");
  console.log(data);

  const MoveList = () => {
    router.push("/");
  };

  const EditBtn = () => {
    router.push(`/BoardWrite/${router.query.number}/BoardEdit`);
  };

  const DeleteBtn = async () => {
    await deleteBoard({ variables: { boardId: router.query.number } });
    alert("삭제되었습니다");
    router.push(`/`);
  };

  return (
    <>
      <DetailPresenter
        data={data}
        MoveList={MoveList}
        EditBtn={EditBtn}
        DeleteBtn={DeleteBtn}
      />
    </>
  );
}
