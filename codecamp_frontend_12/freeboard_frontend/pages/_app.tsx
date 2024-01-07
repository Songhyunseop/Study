import "/styles/globals.css";

import { AppProps } from "next/app";
import Banner from "../src/components/commons/layout/banner";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";

export default function App({ Component }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Banner />
            <Component />
          </>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}
