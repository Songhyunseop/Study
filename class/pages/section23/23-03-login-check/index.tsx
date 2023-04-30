import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LogInPage(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // 받아오는 accessToken 을 globalState에 저장 (어느 페이지에서나 해당 토큰을 사용할 수 있도록!!)
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다");
        return;
      }
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken); // 임시로 사용 (보안문제 때문에), 나중에 refresh 토큰으로 저장방법 변경할 것!
      void router.push("/section23/23-01-login-success");
      //
      //
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      이메일이다: <input type="text" onChange={onChangeEmail} />
      비밀번호다: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
