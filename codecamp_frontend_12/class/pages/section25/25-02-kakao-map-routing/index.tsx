import Link from "next/link";
import { useRouter } from "next/router";

export default function kakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/section25/25-02-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>a 태그 사용시 매
      <a href="/section25/25-02-kakao-map-routing-moved">페이지 이동</a>
      {/* 페이지를 로드할 때마다 새로 다운받아서 오기에 속도가 느리고,싱글페이지
      어플리케이션을 활용 못함 */}
      {/* ... */}
      <Link href="/section25/25-02-kakao-map-routing-moved">페이지 이동</Link>
      {/* Link는 next 에서 제공하는 a태그로, 싱글페이지 어플리케이션을 활용가능 함 */}
    </>
  );
}
