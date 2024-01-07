import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { onError } from "@apollo/client/link/error";

const GLOBAL_STATE = new InMemoryCache();

interface IProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 프리렌더링 예제() - process.browser 방법
  // if (process.browser) {
  //   console.log("나는 지금 브라우저다");
  //   alert("반갑다!");
  // } else {
  //   console.log(
  //     "지금은 아직 프론트엔드 서버다(yarn dev 로 실행시킨 프로그램 내부다!)"
  //   );
  // }
  // //
  // //
  // //
  // // 2. 프리렌더링 예제 - typeof window 방법
  // if (typeof window !== "undefined") {
  //   console.log("나는 지금 브라우저다");
  //   alert("반갑다!");
  // } else {
  //   console.log(
  //     "지금은 아직 프론트엔드 서버다((yarn dev 로 실행시킨 프로그램 내부다!))"
  //   );
  // }
  //
  //
  //
  // 3. 프리렌더링 예제 - 프리렌더링 무시 방법
  useEffect(() => {
    // 1. 기존방식(refreshToken 배우기 전 방식 )
    // const result = localStorage.getItem("accessToken") ?? "";
    // setAccessToken(result);
    //
    //
    // 2. 새로운 방식 (refreshToken 배운 이후의 방식)
    // void getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken ?? "");
    // });
    //
    //
    //
    // 3. 최종방식
    // aaa는 Promise를 반환하지만, 이것이 네이티브 JS의 Promise객체라고 보장할 수 없기에(타사 라이브러리에서 제공하는 자체 Promise도 존재)
    // .toPromise() 를 사용해서 기본 Promise 객체로 변환하여 사용 (혹시나 모를 에러를 발생시키지 않기 위함)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하고 재시도하기
              setAccessToken(newAccessToken ?? "");

              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer qklqkjdkjafsklj => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken ?? ""}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken} ` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리(ram)에 백엔드에서 받아온 데이터를 모두 임시로 저장해두기 (ex. fetch로 받아오는 {data})
  });

  // prettier-ignore
  return (
    <>
      <div>안녕하세요 영희입니다</div>
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
      <div>안녕하세요 훈이입니다</div>
    </>
  );
}
