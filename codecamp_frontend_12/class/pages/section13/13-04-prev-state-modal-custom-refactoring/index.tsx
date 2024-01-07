import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  3; // prev의 값을 반전시키는 onToggleModal 함수를 이용해서 전체 코드에서 Boolean값의 반전이 있는 곳에 재사용 가능 (코드의 간결화)
  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev); // 여기서 현재 prev의 상태는 false, 따라서 값을 반전시켜줌
  };

  // const handleOk = (): void => {
  //   setIsOpen((prev) => !prev); // 여기서 현재 prev 상태는 true, 따라서 값을 반전시켜줌
  // };

  // const handleCancel = (): void => {
  //   setIsOpen((prev) => !prev);
  // };

  const handleComplete = (data: Address): void => {
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달 창 열기</button>
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
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
