import * as S from "./BoardCheck.styles";

export default function CommentWriting(props) {
  return (
    <>
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
            value={props.cmtEdit ? props.CmtWriter : props.Writer}
            //undefined가 두개일 수는 없음 (나중에 value로 통합가능하도록 합쳐서 다시 코드 짤 것!)
            readOnly={props.cmtEdit}
          ></S.WriteBox>
          <S.PwBox
            type="password"
            placeholder="비밀번호"
            Value={props.IsClicked2 && ""}
            onChange={props.PwChk}
          ></S.PwBox>
          <S.Rate>
            {props.StarArr.map((el, idx) => (
              <img
                key={idx}
                src={props.RatingVal - 1 >= idx ? "/Star2.png" : "/Star.png"}
                onClick={() => {
                  props.StarRate(idx);
                }}
              ></img>
            ))}
          </S.Rate>
        </S.Cmt_LogIn>
        <S.Cmt_Content>
          <S.Cmt_Content_Box
            onClick={props.onClickReset}
            maxLength="100"
            onChange={props.ContentChk}
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고,
                        불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다"
            value={
              !props.cmtEdit || props.IsClicked2
                ? props.Content
                : props.CmtContent
            }
          ></S.Cmt_Content_Box>
          <S.Cmt_Create>
            <S.Number>
              <S.Length_Number>{props.TextLength}</S.Length_Number>/100
            </S.Number>
            <S.CreateBtn
              cmtEdit={props.cmtEdit}
              onClick={props.cmtEdit ? props.CommentEdit : props.ClickSendCmt}
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
    </>
  );
}
