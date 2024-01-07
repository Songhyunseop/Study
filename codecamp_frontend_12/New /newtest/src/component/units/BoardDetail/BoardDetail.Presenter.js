import * as S from "./BoardDetail.styles";

export default function DetailPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <S.TitleBox>{props.data?.fetchBoard.title}</S.TitleBox>
          {props.data?.fetchBoard.images[0] ? (
            <S.ImgBox
              src={
                props.data?.fetchBoard.images[0]
                  ? `https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`
                  : "/white.png"
              }
            />
          ) : (
            <div style={{ height: "130px" }}></div>
          )}
          {props.data?.fetchBoard.images[1] ? (
            <S.ImgBox
              src={
                props.data?.fetchBoard.images[1]
                  ? `https://storage.googleapis.com/${props.data?.fetchBoard.images[1]}`
                  : "/white.png"
              }
            />
          ) : (
            <div style={{ height: "130px" }}></div>
          )}
          {props.data?.fetchBoard.images[2] ? (
            <S.ImgBox
              src={
                props.data?.fetchBoard.images[2]
                  ? `https://storage.googleapis.com/${props.data?.fetchBoard.images[2]}`
                  : "/white.png"
              }
            />
          ) : (
            <div style={{ height: "130px" }}></div>
          )}
        </div>
        <S.ContentBox>
          <S.Name>
            <S.Profile src="/Profile.png"></S.Profile>
            <span style={{ background: "white", marginLeft: "10px" }}>
              {props.data?.fetchBoard.writer}
            </span>
          </S.Name>
          <S.Sentence>{props.data?.fetchBoard.contents}</S.Sentence>
        </S.ContentBox>
      </S.Wrapper>
      <S.BtnBox>
        <S.Btn_A onClick={props.MoveList}>글목록</S.Btn_A>
        <S.Btn_B onClick={props.EditBtn}>수정</S.Btn_B>
        <S.Btn_C onClick={props.DeleteBtn}>삭제</S.Btn_C>
      </S.BtnBox>
    </>
  );
}
