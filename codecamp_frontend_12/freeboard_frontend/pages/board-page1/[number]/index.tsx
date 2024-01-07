import WriteBoard from "../../../src/components/units/BoardCheck/BoardCheck.container";
import CommentWriting from "../../../src/components/units/BoardComment/BoardCheck.container";
// 경로 오류 발생 (?) => 마지막 부분이 .container가 아닌 .presenter로 지정된 경우
// presenter의 JSX 까지만 가져오기 때문에 container의 변수나 함수들은 가져오지 못함 (일부 기능 작동에러, 렌더링 안됨 현상 발생)
// BUT ! => 페이지 오류는 나지 않음 => // Why? = export default로 내보낸 container은 컴포넌트가 그 하나밖에 없기에 이름값이 달라도 오류는 발생하지 않음

export default function Board() {
  return (
    <div>
      <WriteBoard cmtEdit={false} />
      <CommentWriting cmtEdit={false} />
    </div>
  );
}
