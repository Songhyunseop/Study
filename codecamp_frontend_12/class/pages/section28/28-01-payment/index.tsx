declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(): JSX.Element {
  const onClickPayment = (): void => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp13576654"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "키보드",
        amount: 64900,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/section28/28-01-payment",
        // 모바일에서는 결제창이 열리면 아예 페이지주소가 달라지기 때문에 결제가 끝난 후 다시 기존의 결제화면 페이지로 이동할 수 있도록 m_redirect_url을 설정해줘야 함!!
      },
      (rsp: any) => {
        // callback
        if (rsp.success === true) {
          //
          // 결제 성공 시 로직,
          console.log(rsp);
          // (백엔드에 결제관련 data 넘겨주기) -> mutation 실행(api 요청) = [createPointTransactionOfLoading]
        } else {
          //
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      {/* 아임포트 라이브러리 */}
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
