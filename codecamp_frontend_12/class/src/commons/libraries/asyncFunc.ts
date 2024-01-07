import { ChangeEvent, FormEvent } from "react";

// async, await 같이 뭔가를 기다리는 함수는 onchange 같은 속성에 값으로 부여할 수 없다고 eslint 가 규정하여 생기는 에러를
// 해결하기 위해 따로 '껍데기 함수'를 만들고 그안에 hof 식으로 진짜 함수를 실행하는 방식을 사용!
// export const wrapAsyncFunc =
//   (asyncFunc: (event: ChangeEvent<HTMLInputElement>) => Promise<void>) =>
//   (event: ChangeEvent<HTMLInputElement>) => {
//     void asyncFunc(event);
//   };

export const wrapAsyncFunc =
  <E>(asyncFunc: (event: E) => Promise<void>) =>
  (event: E) => {
    void asyncFunc(event);
  };

export const wrapFormAsyncFunc =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evnet발생 시 되는 default 기능을 막음
    void asyncFunc();
  };
