import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BestListUI from "./BoardCheck.presenter";
import { FETCH_BOARDS } from "./BoardCheck.queries";
import { MouseEvent } from "react";

export default function BestList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data);

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

  return (
    <>
      <BestListUI data={data} clickNext={clickNext} GoCreate={GoCreate} />
    </>
  );
}
