import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const GLOBAL_STATE = new InMemoryCache();

interface IProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IProps): JSX.Element {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
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
