import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/stores";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        alert("로그인에 실패했습니다");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      void router.push("/23/23-3-hoc/main");
      //
      //
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      아이디 <input onChange={onChangeEmail} type="text" />
      비밀번호 <input onChange={onChangePassword} type="password" />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
