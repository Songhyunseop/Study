import { memo } from "react";

function MemoizationWithChildPage(): JSX.Element {
  console.log("자식이 렌더링 됩니다");

  return (
    <>
      <div>=========================</div>
      <h1>저는 자식 컴포넌트 입니다</h1>
      <div>=========================</div>
    </>
  );
}
//
// 컴포넌트 자체를 memo 로 묶어서 export (컴포넌트 자체를 기억)
// 이후 렌더링이 되어도 memo 로 묶은 컴포넌트는 렌더링에 영향받지 않게 됨
export default memo(MemoizationWithChildPage);
