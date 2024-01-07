import LoginPresenter from "./LoginPage.presenter";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./LoginPage.query";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useRouter } from "next/router";

export default function LoginContainer() {
  const router = useRouter();

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);

  const ClickLogin = async (data) => {
    console.log(data.email);
    console.log(data.password);

    try {
      const result = await loginUser({
        variables: {
          password: data.password,
          email: data.email,
        },
      });

      const newToken = result.data?.loginUser.accessToken;

      console.log(result.data?.loginUser);

      if (newToken === undefined) {
        alert("잘못된 로그인 입니다");
        return;
      }

      setAccessToken(newToken);
      localStorage.setItem("accessToken", newToken);
      router.push("/market-main");
    } catch (error) {
      alert(error.message);
    }
  };

  return <LoginPresenter ClickLogin={ClickLogin} />;
}
