import { accessTokenState } from "../../../src/commons/stores";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function Login() {
  const LOGIN_USER = gql`
    mutation loginUser($password: String!, $email: String!) {
      loginUser(email: $email, password: $password) {
        accessToken
      }
    }
  `;

  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          password: Pw,
          email: Id,
        },
      });

      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      if (!Pw || !Id) {
        alert("로그인을 먼저 해주세요");
        return;
      }

      setAccessToken(accessToken);
      router.push("/23/23-login-success");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      아이디 <input type="text" onChange={onChangeId} />
      비밀번호 <input type="password" onChange={onChangePw} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
