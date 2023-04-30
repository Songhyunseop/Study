import { useEffect } from "react";

declare const window: typeof globalThis & {
  // window라는 것의 타입은 globalThis(전역 설정 This) 이며, &(그리고) 그 타입에는 kakao 도 있다고 알려주는 것 (타입스크립트 에러 해결법)
  kakao: any;
};

export default function kakaoMapPage(): JSX.Element {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    console.log(map);
  }, []);

  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ed8b9032080c056afd81f01181ec33a1"
      ></script>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
