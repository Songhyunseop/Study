// presenter 부분
export default function Presenter(parameter) {
  return (
    <div>
      {parameter.child}는 {parameter.age}살 입니다.
    </div>
  );
}
