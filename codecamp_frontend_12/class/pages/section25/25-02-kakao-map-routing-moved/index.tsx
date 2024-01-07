import { useEffect } from "react";

declare const window: typeof globalThis & {
  // window라는 것의 타입은 globalThis(전역 설정 This) 이며, &(그리고) 그 타입에는 kakao 도 있다고 알려주는 것 (타입스크립트 에러 해결법)
  kakao: any;
};

export default function kakaoMapPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script"); // <script> 태그를 만듬 (이 경우 가상DOM이 아닌 실제 DOM 에 작성되어 react의 렌더링 문제나 오류발생 가능성을 회피할 수 있음 [좀 더 자세히 알아볼 것!])
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ed8b9032080c056afd81f01181ec33a1";
    // 만든 script 태그에 scr를 똑같이 추가

    document.head.appendChild(script);
    // dom의 head에 만들어 놓은 <script> 태그 추가

    script.onload = () => {
      // script 태그 안의 다운을 기다려줌 (onload 메소드로 script로 다운받는 객체의 정의가 완전히 완료되고 나서야 해당 객체 안의 kakao 의 값을 읽어낼 수(찾을 수) 있기 때문)
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ed8b9032080c056afd81f01181ec33a1"
      ></script> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
