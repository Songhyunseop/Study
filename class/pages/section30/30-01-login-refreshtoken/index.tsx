import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LogInPage(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);

      // 받아오는 accessToken 을 globalState에 저장 (어느 페이지에서나 해당 토큰을 사용할 수 있도록!!)
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다");
        return;
      }
      setAccessToken(accessToken);
      void router.push("/section30/30-01-login-refreshtoken-success");
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
      <button onClick={wrapAsyncFunc(onClickLogin)}>로그인</button>
    </>
  );
}
