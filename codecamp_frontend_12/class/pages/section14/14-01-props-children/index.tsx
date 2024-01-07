import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <>
      <div>+++++++++ 빨간색 파란색 초록색 PropsChildren 페이지 ++++++++++</div>
      {/* 쏙 들어가기!(children.props로 하위컴포넌트에 넘김) -> 다시 땡겨오기(하위 컴포넌트 전체를 상위에서 import 해옴) */}
      <Example school="다람쥐초등학교">
        <div>
          <input type="text" />
          <div>저는 철수입니다</div>
          <button>클릭해주세요</button>
        </div>
      </Example>
      <div>+++++++++ 빨간색 파란색 초록색 PropsChildren 페이지 ++++++++++</div>
    </>
  );
}
