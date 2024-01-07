import * as S from "./Signup.styles";

export default function ProductSignUpPresenter() {
  return (
    <>
      <S.Wrapper>
        <S.SignBox>
          <S.Title>회원가입</S.Title>
          <S.Boxs>
            <S.Email>
              <S.Word>이메일</S.Word>
              <S.InputBox />
            </S.Email>
            <S.Password>
              <S.Word>비밀번호</S.Word>
              <S.InputBox />
            </S.Password>
            <S.Name>
              <S.Word>이름</S.Word>
              <S.InputBox />
            </S.Name>
          </S.Boxs>
          <S.Button>회원가입</S.Button>
        </S.SignBox>
      </S.Wrapper>
    </>
  );
}
