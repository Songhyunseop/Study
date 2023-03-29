import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

// HIDDEN-HEADERS에 지정한 router 상의 Path 를 입력해 두고, 아래의 .includes 메소드로 반환값인 boolean 의 상태에 따라
// isHiddenHeader의 상태가 바뀌게 되며, 이에 따라 return 부분의 isHiddenHeader 부분이 조건부 렌더링으로 렌더링되었다가 안되었다가를 반복

// 위의 메소드를 활용하여 HIDDEN_HEADERS에 지정한 주소에 들어갈 경우, 특정 레이아웃이 화면상에 보이지 않게 조절할 수 있음!!!

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
];

interface IProps {
  children: JSX.Element;
}

export default function Layout(props: IProps): JSX.Element {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
