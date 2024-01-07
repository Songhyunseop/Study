import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address): void => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달 창 열기</button>
      {/* 모달종료방식 - 1. 모달 숨기는 방법 (숨김방식 ex. 이력서 작성, 작성했던 부분까지는 남아있음) */}
      {/* <Modal
        title="주소찾기"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}
      {/* 모달 종료 방식 - 2. 모달 삭제 방법 (삭제방식 ex.비밀번호정보) */}
      {isOpen && (
        <Modal
          title="주소찾기" // 조건부 렌더링을 활용해서 isOpen이 true면 &&연산자 뒤의 내용을 다시 렌더링해서 보여줌(새로고침효과, 모달 내의 정보 초기화 됨!)
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
