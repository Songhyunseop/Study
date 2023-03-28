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
          <S.CommentBox>
            <S.Cmt_Title>
              <S.Cmt_Title_Content>
                <img src="/Comment.png"></img>댓글
              </S.Cmt_Title_Content>
            </S.Cmt_Title>
            <S.Cmt_LogIn>
              <S.WriteBox
                placeholder="작성자"
                onChange={props.WriterChk}
                defaultValue={props.cmtEdit ? props.CmtWriter : "  "}
                value={props.Writer} //undefined가 두개일 수는 없음 (나중에 value로 통합가능하도록 합쳐서 다시 코드 짤 것!)
                readOnly={props.cmtEdit}
              ></S.WriteBox>
              <S.PwBox
                type="password"
                placeholder="비밀번호"
                onChange={props.PwChk}
              ></S.PwBox>
              <S.Rate>
                {props.StarArr.map((el, idx) => (
                  <img
                    key={idx}
                    src={
                      props.RatingVal - 1 >= idx ? "/Star2.png" : "/Star.png"
                    }
                    onClick={() => {
                      props.StarRate(idx);
                    }}
                  ></img>
                ))}
              </S.Rate>
            </S.Cmt_LogIn>
            <S.Cmt_Content>
              <S.Cmt_Content_Box
                maxLength="100"
                onChange={props.ContentChk}
                placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고,
                        불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다"
                defaultValue={props.cmtEdit ? props.CmtContent : "  "}
                value={props.Content1}
              ></S.Cmt_Content_Box>
              <S.Cmt_Create>
                <S.Number>
                  <S.Length_Number>{props.TextLength}</S.Length_Number>/100
                </S.Number>
                <S.CreateBtn
                  cmtEdit={props.cmtEdit}
                  onClick={
                    props.cmtEdit ? props.CommentEdit : props.ClickSendCmt
                  }
                >
                  {props.cmtEdit ? "수정" : "등록"}하기
                </S.CreateBtn>
              </S.Cmt_Create>
            </S.Cmt_Content>
            <S.Cmt>
              {props.data2?.fetchBoardComments.map((el, idx) => (
                <S.Cmt_Box key={el._id}>
                  <S.ProfileImage>
                    <img src="/Profile.png"></img>
                  </S.ProfileImage>
                  <S.ProfileLeft>
                    <S.CmtUpper>
                      <S.CmtUpperBox1>
                        <S.UserName>{el.writer}</S.UserName>
                        <S.RateEdit2>
                          <img
                            src={
                              props.data2?.fetchBoardComments[idx].rating <= 0
                                ? "/Star.png"
                                : "/Star2.png"
                            }
                          ></img>
                          <img
                            src={
                              props.data2?.fetchBoardComments[idx].rating <= 1
                                ? "/Star.png"
                                : "/Star2.png"
                            }
                          ></img>
                          <img
                            src={
                              props.data2?.fetchBoardComments[idx].rating <= 2
                                ? "/Star.png"
                                : "/Star2.png"
                            }
                          ></img>
                          <img
                            src={
                              props.data2?.fetchBoardComments[idx].rating <= 3
                                ? "/Star.png"
                                : "/Star2.png"
                            }
                          ></img>
                          <img
                            src={
                              props.data2?.fetchBoardComments[idx].rating <= 4
                                ? "/Star.png"
                                : "/Star2.png"
                            }
                          ></img>
                        </S.RateEdit2>
                      </S.CmtUpperBox1>
                      <S.CMtUpperBox2>
                        <S.Edit
                          onClick={props.clickX}
                          id={el._id}
                          src="/Pen.png"
                        ></S.Edit>
                        <S.Delete
                          onClick={props.CmtDelete}
                          id={el._id}
                          src="/X.png"
                        ></S.Delete>
                      </S.CMtUpperBox2>
                    </S.CmtUpper>
                    <S.CmtBottom>
                      <S.Cmt_Text>{el.contents}</S.Cmt_Text>
                      <S.Cmt_CreateDate>
                        {el.createdAt.slice(0, 10)}
                      </S.Cmt_CreateDate>
                    </S.CmtBottom>
                  </S.ProfileLeft>
                </S.Cmt_Box>
              ))}
            </S.Cmt>
          </S.CommentBox>
        </S.Wrapper_Bottom>
      </div>
    </div>
  );
}
