export default function MapElPage(): JSX.Element {
  // 1. 기본방법
  //   ["철수", "영희", "훈이"].map((el, index) => {
  //     console.log("el: ", el);
  //     console.log("index: ", index);
  //   });

  // 2. 매개변수 변경한 방법
  //   ["철수", "영희", "훈이"].map((another1, another2) => {
  //     console.log("el: ", another1);
  //     console.log("index: ", another2);
  //   });

  // 3. el과 index 바꾸기
  ["철수", "영희", "훈이"].map((index, el) => {
    console.log("el: ", index);
    console.log("index: ", el);
  });

  return <></>;
}
