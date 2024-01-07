import { useRouter } from "next/router";

export default function DynamicPage() {
  const router = useRouter();

  return (
    <>
      <div>여기는 동적페이지 입니다</div>
      <div>게시글 ID : ${router.query.boardId}</div>
    </>
  );
}
