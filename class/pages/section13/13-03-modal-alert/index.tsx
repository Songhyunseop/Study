import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공하였습니다!!",
    });
  };

  const onClickError = (): void => {
    Modal.error({
      content: "비밀번호가 틀렸습니다!!",
    });
  };

  return (
    <>
      <button onClick={onClickSuccess}>Success(성공!)</button>
      <button onClick={onClickError}>Fail(실패!)</button>
    </>
  );
}
