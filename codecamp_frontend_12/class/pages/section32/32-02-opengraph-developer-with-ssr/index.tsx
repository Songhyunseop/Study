// 개발자 폐이지 (ex. Discord, 카카오톡...)

import axios from "axios";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

export default function OpenGraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 1. 채팅데이터에 주소가 있는지를 체크(ex. http~~로 시작하는 문장있는지 여부)
    const qqq =
      "http://localhost:3000/section32/32-02-opengraph-provider-with-ssr";
    //
    // 2. 주소를 찾았다면 해당 주소 scrapping (주소를 이용해 요청으로 html 긁어오기)
    const result = await axios.get(qqq);
    console.log(result.data); // html 소스코드
    // 여기서 기본 html 소스코드를 받아오게 되는데, 이 때 처음 서버에서 렌더링 되었을 때 내보내지는 html 문서를 받기 때문에 useQuery는 서버에서 실행되지 않음
    // 원래라면 브라우저에서는 이후 js, css를 다운받고 이를 기존에 보낸 html에 합하면서 실행이 되지만, axios는 요청에 응답으로 소스코드를 받은 순간 이를 data에 담고 종료되기에
    // useQuery가 실행되지 않아서 data를 받아오지 않았기 때문에 해당 html 코드 상에 meta 태그의 data 부분이 undefined가 되는 것!!
    //
    //
    // 3. 긁어 온 html에서 meta 태그를 찾은 다음, 해당 meta 태그에서 og(opengraph) 찾기
    const aa = result.data
      .split("<meta")
      .filter((el: string) => el.includes("og:"));

    console.log(aa);
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
