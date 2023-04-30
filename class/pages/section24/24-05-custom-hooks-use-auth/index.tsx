import { useAuth } from "../../../src/components/commons/hooks/useAuth";

// 기존의 withAuth 더 간단하게 만듬
// ? 그럼 기존에 왜 HOC로 어렵게 withAuth를 만들었나?
// (함수형 컴포넌트에서만 이렇게 가능하고 클래스형에서는 불가능=> 클래스형은 HOC 방식으로 만들어줘야함 (훅이 없으니깐!!))
export default function CustomHooksUseAuthPage(): JSX.Element {
  useAuth();
  return <div>프로필 페이지입니다</div>;
}
