import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalandAddress() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddress, setIsAddress] = useState("");

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  };

  const handleOk = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleComplete = (data) => {
    setIsAddress(data.address);
    setIsModalOpen(true);
  };

  return (
    <>
      <button onClick={showModal}>모달열기</button> <span>{isAddress}</span>
      {isModalOpen && (
        <Modal
          title="주소검색"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          (
          <DaumPostcodeEmbed onClose={showModal} onComplete={handleComplete} />)
        </Modal>
      )}
    </>
  );
}
