import Head from "next/head";

// 제공자 페이지 (ex. 네이버, 다음...) - 사이트의 정보를 알리는 목적

export default function OpenGraphProviderPage(): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓 사이트" />
        <meta
          property="og:description"
          content="나의 세상에 오신 것을 환영합니다"
        />
        <meta property="og:image" content="http://link~~" />
      </Head>
      <div>세상에 오신 것을 환영합니다!(여기는 Body입니다 )</div>
    </>
  );
}
