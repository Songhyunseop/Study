import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // AppProps로 타입 정의
  // ApolloSetting에 따로 담아서 보내고(props.children) => 다시 땡겨옴
  // 위의 [컴포넌트 합성] 방식을 통해 코드 세팅을 간략하게 줄일 수 있음

  return (
    <div>
      <div>====== 여기는 _app.js 컴포넌트 시작부분 입니다</div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
      <div>====== 여기는 _app.js 컴포넌트 마지막부분 입니다</div>
    </div>
  );
}
