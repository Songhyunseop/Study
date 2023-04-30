import { useRouter } from "next/router";
import { useEffect } from "react";
import { restoreAccessTokenLoadable } from "../../../commons/stores";
import { useRecoilValueLoadable } from "recoil";

export const loginCheck = (Component: any) => (props: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  //
  // 1. 로그인 체크 (refreshToken 이전의 방식)
  //
  // useEffect(() => {
  //   // localStorage는 getItem을 할때 키, 값 존재안하면 null을 반환하는 점을 이용해서 조건문 작성
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능합니다");
  //     void router.push("/section23/23-05-login-check-hoc");
  //   }
  // }, []);
  //
  //
  //
  // 2. 로그인 체크 (refreshToken 이후의 방식)
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === null) {
  //       alert("로그인 후 이용 가능합니다");
  //       void router.push("/section23/23-05-login-check-hoc");
  //     }
  //   });
  // });
  //
  //
  //
  // 3. 최종방식
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === null) {
        alert("로그인 후 이용 가능합니다");
        void router.push("/section23/23-05-login-check-hoc");
      }
    });
  }, []);

  return <Component {...props} />;
};
