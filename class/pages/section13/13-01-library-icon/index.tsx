import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  // 해당하는 라이브러리, 프레임워크의 스타일을 이렇게 적용해 줌
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onCLickDelete = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id); // event.target과 event.currentTarget의 차이 => event.target은 타겟이 명확하지 않기에 다른 요소일 가능성이 있으나,
    // current.target은 지정되는 타겟이 명확하기에 어떤 요소를 선택하는지가 확실해서 typescript의 경고메시지가 안 뜸!
  };

  return <MyIcon id="삭제할 게시글 ID" onClick={onCLickDelete} />; // 지정한 스타일 이름을 컴포넌트 이름으로 사용해서 return
}

// 1. 위 아이콘의 html 요소는 span 태그 안에 svg라는 또 다른 태그가 자식요소로 있음 (콘솔 element에서 확인 가능)
// 2. 이벤트 전파특징으로 인해 아이콘을 클릭하면 안 쪽의 svg 태그가 클릭 됨(가져오는 id값을 span이 아닌 svg에서 찾으려고 하니 id값을 찾을 수가 없는 것!)
// 3. event.target을 currentTarget로 바꿔서 현재 클릭한 요소를 선택하도록 고정
