import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

export const loginCheck =
  // prettier-ignore
  (Component: () => JSX.Element) => <P extends Record<string, unknown>>(props: P): ReactElement => {
    // props 의 타입은 any 대신 이걸로
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능합니다");
        void router.push("/section23/23-05-login-check-hoc");
      }
    }, []);

    return <Component {...props} />;
  };

// 타입 차이 JSX.element vs React Element
//
//
// 1. [JSX.Element]
// 일반적인 jsx 구조 타입
//
//
//
// 2. [React Element]
// JSX.element + props 타입 (좀 더 큰 범위의 개념)
