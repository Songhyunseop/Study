import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    // localStorage는 getItem을 할때 키, 값 존재안하면 null을 반환하는 점을 이용해서 조건문 작성
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);
};
