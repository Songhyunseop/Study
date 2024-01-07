import { useState } from "react";
import * as S from "../../styles/emotion";

export default function MakeModal() {
  const [isMoved, setIsMoved] = useState();

  const MakeModal = () => {
    setIsMoved(!isMoved);
    console.log(isMoved);
  };

  return (
    <>
      <S.Box>
        <S.ModalBtn onClick={MakeModal}>모달 생성</S.ModalBtn>
        <S.Modal isMoved={isMoved}>
          <S.Content>
            <span>모달 생성 성공</span>
            <button onClick={MakeModal}>확인</button>
          </S.Content>
        </S.Modal>
      </S.Box>
    </>
  );
}
