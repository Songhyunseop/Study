import * as S from "./BoardCheck.styles";

export default function Writing(props) {
  console.log(props.data2?.fetchBoardComments[0]?.rating);
  return (
    <div>
      <div>
        <S.Wrapper>
          <S.Title>
            <S.Privacy>
              <S.Profile src="/Profile.png"></S.Profile>
              <S.User>
                <S.Name>{props.data?.fetchBoard.writer}</S.Name>
                <S.Date>Date: 2021.02.18</S.Date>
              </S.User>
            </S.Privacy>
            <S.Emoji>
              <img src="/Link.png"></img>
              <img src="/Location.png" onClick={props.toggleVisible}></img>
            </S.Emoji>
          </S.Title>
          {props.IsVisible && <S.AlertBox src="/alertBox.png"></S.AlertBox>}
          <S.Text>
            서울특별시 영등포구 양산로 200
            <br />
            (영등포동 5가, 영등포시장역) 영등포 타임스퀘어 2층
          </S.Text>
          <S.Body>
            <S.UpBox>
              <S.UpBox_Title>{props.data?.fetchBoard.title}</S.UpBox_Title>
              <img src="/concert.png"></img>
              <S.ContentsBox>{props.data?.fetchBoard.contents}</S.ContentsBox>
            </S.UpBox>
          </S.Body>
          <S.Bottom>
            <S.DownBox>
              <img src="/Video.png"></img>
              <S.DownBox_Like>
                <img src="/Like.png"></img>
                <img src="/Dislike.png"></img>
              </S.DownBox_Like>
            </S.DownBox>
          </S.Bottom>
        </S.Wrapper>
        <S.Wrapper_Bottom>
          <S.BtnBox>
            <S.Page_Btn onClick={props.getList}>목록으로</S.Page_Btn>
            <S.Page_Btn onClick={props.getEdit}>수정하기</S.Page_Btn>
            <S.Page_Btn onClick={props.getDelete}>삭제하기</S.Page_Btn>
          </S.BtnBox>
        </S.Wrapper_Bottom>
      </div>
    </div>
  );
}
