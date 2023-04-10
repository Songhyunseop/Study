import "/styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import { createUploadLink } from "apollo-upload-client";

export default function App({ Component }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  });

  const Client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={Client}>
      <Component />
    </ApolloProvider>
  );
}
