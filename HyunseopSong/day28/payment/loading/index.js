import { useRouter } from "next/router";
import { useState } from "react";

export default function Loading() {
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const Priceval = (e) => {
    setPrice(e.target.value);
  };

  const ClickPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp13576654"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          router.push("/28/payment/complete");
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      <select onChange={Priceval}>
        선택상자
        <option value={500}>500원</option>
        <option value={1000}>1000원</option>
        <option value={2000}>2000원</option>
        <option value={5000}>5000원</option>
      </select>
      <button onClick={ClickPay}>충전하기</button>
    </>
  );
}
