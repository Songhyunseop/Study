// 개발자 폐이지 (ex. Discord, 카카오톡...)

import axios from "axios";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

export default function OpenGraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 1. 채팅데이터에 주소가 있는지를 체크(ex. http~~로 시작하는 문장있는지 여부)
    const qqq = "http://localhost:3000/section32/32-01-opengraph-provider";
    //
    // 2. 주소를 찾았다면 해당 주소 scrapping (주소를 이용해 요청으로 html 긁어오기)
    const result = await axios.get(qqq);
    console.log(result.data); // html(JSON 형태)
    //
    // 3. 긁어 온 html에서 meta 태그를 찾은 다음, 해당 meta 태그에서 og(opengraph) 찾기
    result.data.split("<meta").filter((el: string) => el.includes("og:"));
  };
  //
  //
  //
  //
  // [BUT!] => 사실 위의 로직은 브라우저에서 실행 안됨 (CORS 정책에 위반되기 때문에 에러가 발생!!)
  //           따라서, 보통은 백엔드 서버나 프론트 서버에서 실행

  return (
    <>
      <button onClick={wrapAsyncFunc(onClickEnter)}>
        채팅 입력 후 엔터치기
      </button>
    </>
  );
}
