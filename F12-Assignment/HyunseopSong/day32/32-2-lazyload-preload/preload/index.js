import { useEffect, useRef } from "react";

const imgBox = [];

export default function PreLoadPage() {
  const divRef = useRef(null);

  useEffect(() => {
    const Img = new Image();
    Img.src = "/IU2.png";
    Img.onload = () => {
      imgBox.push(Img);
    };
  });

  const onClickImageSet = () => {
    divRef.current?.appendChild(imgBox[0]);
  };

  return (
    <>
      <button onClick={onClickImageSet}>이미지 보여주기</button>
      <div ref={divRef}></div>
    </>
  );
}
