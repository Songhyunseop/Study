import { memo } from "react";

function ChildPage() {
  console.log("렌더링 됩니다용");

  return (
    <>
      <div></div>
      <div></div>
    </>
  );
}

export default memo(ChildPage);
