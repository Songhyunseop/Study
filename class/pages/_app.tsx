import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  // AppProps로 타입 정의

  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리(ram)에 백엔드에서 받아온 데이터를 모두 임시로 저장해두기
  });

  return (
    <div>
      <div>====== 여기는 _app.js 컴포넌트 시작부분 입니다</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>====== 여기는 _app.js 컴포넌트 마지막부분 입니다</div>
    </div>
  );
}
