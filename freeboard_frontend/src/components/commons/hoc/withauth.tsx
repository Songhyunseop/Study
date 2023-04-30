import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccesstoken";

export const LoginWithAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 먼저 하셈");

      router.push("/Login");
    }

    getAccessToken().then((newAccessToken) => {
      if (newAccessToken === null) {
        alert("로그인 먼저 하셈");

        router.push("/Login");
      }
    });
  }, []);

  return <Component {...props} />;
};
