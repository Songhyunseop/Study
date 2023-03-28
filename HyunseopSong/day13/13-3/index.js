import { useState } from "react";
import { Rate } from "antd";

export default function StarRating() {
  const desc = ["1점", "2점", "3점", "4점", "5점"];

  const [value, setValue] = useState(0);

  return (
    <>
      <div>
        <Rate tooltips={desc} onChange={setValue} value={value} />
      </div>
      {value ? <span>{desc[value - 1]}</span> : <span>0점</span>}
    </>
  );

  return <></>;
}
