import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BestListUI from "./BoardCheck.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardCheck.queries";
import { MouseEvent, useEffect, useState } from "react";

export default function BestList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });

  const { data: BoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const [Next, setNext] = useState(1);
  const [targetNum, setTargetNum] = useState("");
  const [MoveDetact, setMoveDetact] = useState(false);

  const clickNext = (event: MouseEvent<HTMLElement>) => {
    console.log(event.target); // event.target의 타입이 다른 형식일 수도 있기에 typescript에서 경고메시지를 보냄!
    console.log(router);
    // event.target의 타입이 div요소라면 라우팅 해도 된다는 의미
    if (event.target instanceof HTMLElement)
      router.push(`/board-page1/${event.target.id}`);
  };

  const GoCreate = () => {
    router.push("/sign");
  };

  const ClickNumber = (event) => {
    refetch({ page: Number(event.target.id) + Next });
    console.log(event.target);
    setTargetNum(event.target.id);
  };

  const MovePrev = () => {
    if (Next === 1) return;

    setNext((prev) => prev - 10);
    setMoveDetact(!MoveDetact);
  };

  const MoveNext = () => {
    if (Math.ceil(BoardsCount.fetchBoardsCount / 10) < Next + 10) return;
    setNext((prev) => prev + 10);
    setMoveDetact(!MoveDetact);
  };
  //

  //
  //
  useEffect(() => {
    refetch({ page: Number(targetNum) + Next });
  }, [MoveDetact]);

  const MoveEnd = () => {
    if (Math.ceil(BoardsCount.fetchBoardsCount / 10) % 10 === 0) {
      setNext(Math.ceil(BoardsCount.fetchBoardsCount / 10) - 10 + 1);
    } else {
      setNext(
        Math.floor(Math.ceil(BoardsCount.fetchBoardsCount / 10) * 0.1) * 10 + 1
      );
    }
    refetch({ page: Math.ceil(BoardsCount.fetchBoardsCount / 10) });
    setTargetNum(
      String(Math.ceil(BoardsCount.fetchBoardsCount / 10) - 1)[
        String(Math.ceil(BoardsCount.fetchBoardsCount / 10)).length - 1
      ]
    );
  };

  const MoveFirst = () => {
    refetch({ page: 1 });
    setNext(1);
    setTargetNum(String(0));
  };

  return (
    <>
      <BestListUI
        data={data}
        ClickNumber={ClickNumber}
        clickNext={clickNext}
        GoCreate={GoCreate}
        MoveNext={MoveNext}
        MovePrev={MovePrev}
        Next={Next}
        targetNum={targetNum}
        MoveFirst={MoveFirst}
        MoveEnd={MoveEnd}
        BoardsCount={BoardsCount}
      />
    </>
  );
}
