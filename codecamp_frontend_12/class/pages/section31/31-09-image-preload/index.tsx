import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = [];

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const Img = new Image(); // 이렇게 하면 Img는 새로운 img 태그가 됨
    Img.src = "용량디따큰배너이미지.jpg"; // 다운로드
    Img.onload = () => {
      qqq.push(Img); // push로 img 태그 저장
    };
  });

  const onClickMove = (): void => {
    void router.push("/section31/31-09-image-preload-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기 </button>
    </>
  );
}
