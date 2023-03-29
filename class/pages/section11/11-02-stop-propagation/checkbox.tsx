export default function CheckBox(): JSX.Element {
  const qqq2 = (event: any): void => {
    event.stopPropagation(); // qqq3 클릭 시 여기 2번까지만 전파되어 실행 (qqq1은 실행 X 안됨)
    alert("2번클릭");
  };

  const qqq3 = (event: any): void => {
    console.log(event);
    alert("3번클릭");
  };

  return (
    <>
      <span onClick={qqq2}>
        <input onClick={qqq3} type="checkbox" />
      </span>
    </>
  );
}
