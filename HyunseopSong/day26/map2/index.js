import { useRouter } from "next/router";

export default function MoveKakaoMap() {
  const router = useRouter();

  const MoveToKakao = () => {
    router.push("/26/map1");
  };

  return (
    <>
      <button onClick={MoveToKakao}>이동하기</button>
    </>
  );
}
