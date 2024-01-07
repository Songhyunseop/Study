import "../styles/globals.css";
import LayOut from "../src/component/commons/layout/banner";
import SideBar from "../src/component/commons/layout/sidebar";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export default function App({ Component, pageProps }) {
  const uploladLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploladLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <SideBar>
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </SideBar>
      </ApolloProvider>
    </>
  );
}
