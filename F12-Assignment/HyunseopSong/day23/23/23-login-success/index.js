import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginSuccess() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [accessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  //   if (!accessToken) {
  //     alert("로그인을 먼저 해주세요");
  //     router.push("/23/23-login");
  //   }

  // 문제발생, 로그인 완료 페이지로 강제적으로 이동 시 토큰값 없이 페이지로 이동하면 alert 이 undefined 라는 오류가 발생 (왜?)

  console.log(data);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다</div>
    </>
  );
}
