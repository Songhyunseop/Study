// apollo에서 zen -observable를 따로 가공하여 제공하는 Observable
// import {Observable} from "@apollo/client"

import { from } from "zen-observable";

export default function observableFlatMap(): JSX.Element {
  const onClickButton = (): void => {
    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // fromPromise
      .flatMap((el) => from([`${el} 결과에 qqq 적용`, `${el} 결과에 zzz 적용`]))
      .subscribe((el) => {
        console.log(el);
      });
  };
  // subscribe로 관찰? 가능
  return <button onClick={onClickButton}>클릭</button>;
}
