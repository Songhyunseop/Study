import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리(ram)에 백엔드에서 받아온 데이터를 모두 임시로 저장해두기
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
