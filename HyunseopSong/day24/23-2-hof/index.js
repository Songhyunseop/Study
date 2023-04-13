export default function HOF() {
  const onClickButton = (parameter) => () => {
    console.log(parameter);
  };

  return (
    <>
      <button onClick={onClickButton(123)}>HOF 버튼</button>
    </>
  );
}
