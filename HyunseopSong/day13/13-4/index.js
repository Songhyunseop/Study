import { useState } from "react";

export default function StarLibrary() {
  const arr = new Array(5).fill(1);

  const [IdVal, setIdVal] = useState("");

  const ClickStar = (e) => {
    setIdVal(e.target?.id);
    console.log(IdVal);
  };

  return (
    <>
      {arr.map((el, idx) => (
        <img
          key={idx}
          id={idx}
          src={IdVal <= idx - 1 ? "/Star_gray.png" : "/Star_gold.png"}
          onClick={ClickStar}
        ></img>
      ))}
    </>
  );
}
