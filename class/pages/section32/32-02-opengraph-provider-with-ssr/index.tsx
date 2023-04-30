import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

// 제공자 페이지 (ex. 네이버, 다음...) - 사이트의 정보를 알리는 목적

export default function OpenGraphProviderPage(props: any): JSX.Element {
  // const { data } = useQuery(FETCH_USED_ITEM, {
  //   variables: {
  //     useditemId: "6449ce6eaef9f000281ba2ab",
  //   },
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props.qqq.name} />
        <meta property="og:description" content={props.qqq.remarks} />
        <meta property="og:image" content={props.qqq.images} />
      </Head>
      <div>세상에 오신 것을 환영합니다!(여기는 Body입니다 )</div>
    </>
  );
}

// 1. getServerSideProps 는 존재하는 단어! (변경 불가능)
// 2. getServerSideProps 는 서버(프론트 서버 = webpack 서버프로그램)에서만 실행됨 (useEffect와는 반대되는 개념)
export const getServerSideProps = async (): Promise<any> => {
  console.log("현재 여기는 서버입니다");

  // 1. 여기서 API 요청

  const graphQLClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql"
  );

  const result = await graphQLClient.request<Pick<IQuery, "fetchUseditem">>(
    FETCH_USED_ITEM,
    {
      useditemId: "6449ce6eaef9f000281ba2ab",
    }
  );

  return {
    // 여기서 return 되는 props는 위쪽의 OpenGraphProviderPage의 props에 담김 (pageProps라고 함)
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
