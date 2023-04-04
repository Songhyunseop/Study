import { useState } from "react";

// 맵 함수가 생성하는 각 컴포넌트 중 하나(요소 1개), 이런 컴포넌트를 map 함수로 반복 생성

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  // map 함수와 반복생성되는 요소 컴포넌트의 분리 [여기는 반복 생성되는 각 요소의 컴포넌트 안]
  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
