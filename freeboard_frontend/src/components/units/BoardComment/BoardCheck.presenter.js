import * as S from "./BoardCheck.styles";
import CommentItem from "./CommentItem";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "400px",
    height: "230px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid gold",
    borderTop: "35px solid gold",
    boxShadow: "1px 1px #DBA901",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default function CommentWriting(props) {
  const [isCorrect, setIsCorrect] = useState("");
  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        {props.error}
        <button
          onClick={props.closeModal}
          style={{
            backgroundColor: "gold",
            width: "100px",
            height: "30px",
            border: "2px solid #FFBF00",
            boxShadow: "2px 2px black",
            margin: "70px 0px 0px 0px",
          }}
        >
          닫기
        </button>
      </Modal>
      <Modal
        isOpen={props.DeleteIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <S.InputBox>
          <span>비밀번호 입력</span>
          <input
            style={{ height: "30px" }}
            type="password"
            onChange={props.DeletePwChk}
          />
        </S.InputBox>
        <button
          onClick={props.CmtDelete}
          style={{
            backgroundColor: "gold",
            width: "100px",
            height: "30px",
            border: "2px solid #FFBF00",
            boxShadow: "2px 2px black",
            margin: "70px 0px 0px 0px",
          }}
        >
          확인
        </button>
      </Modal>
      <S.CommentBox>
        <S.Cmt_Title>
          <S.Cmt_Title_Content>
            <img src="/Comment.png"></img>댓글
          </S.Cmt_Title_Content>
        </S.Cmt_Title>
        <S.Cmt_LogIn>
          {props.isEdit ? (
            <S.WriteBox readOnly={true}></S.WriteBox>
          ) : (
            <S.WriteBox
              placeholder="작성자"
              onChange={props.WriterChk}
              value={props.Writer}
              //undefined가 두개일 수는 없음 (나중에 value로 통합가능하도록 합쳐서 다시 코드 짤 것!)
            ></S.WriteBox>
          )}
          {props.isEdit ? (
            <S.PwBox readOnly={true}></S.PwBox>
          ) : (
            <S.PwBox
              value={props.Pw}
              type="password"
              placeholder="비밀번호"
              onChange={props.PwChk}
            ></S.PwBox>
          )}
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
          {props.isEdit ? (
            <S.Cmt_Content_Box readOnly={true}></S.Cmt_Content_Box>
          ) : (
            <S.Cmt_Content_Box
              value={props.Content}
              onClick={props.onClickReset}
              maxLength="100"
              onChange={props.ContentChk}
              placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고,
                        불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다"
            ></S.Cmt_Content_Box>
          )}
          <S.Cmt_Create>
            <S.Number>
              <S.Length_Number>{props.TextLength}</S.Length_Number>/100
            </S.Number>
            <S.CreateBtn onClick={props.ClickSendCmt}>등록하기</S.CreateBtn>
          </S.Cmt_Create>
        </S.Cmt_Content>
        <S.Cmt>
          {props.data2?.fetchBoardComments.map((el, idx) => (
            <CommentItem
              ContentChk={props.ContentChk}
              PwChk={props.PwChk}
              data2={props.data2}
              CommentEdit={props.CommentEdit}
              el={el}
              idx={idx}
              setIsCorrect={setIsCorrect}
              isCorrect={isCorrect}
              key={el._id}
              StarArr={props.StarArr}
              StarRate={props.StarRate}
              RatingVal={props.RatingVal}
              StarArr2={props.StarArr2}
              StarRate2={props.StarRate2}
              setRatingVal2={props.setRatingVal2}
              RatingVal2={props.RatingVal2}
              setTargetId={props.setTargetId}
              setIsEdit={props.setIsEdit}
              isEdit={props.isEdit}
              CmtDelete={props.CmtDelete}
              deleteBox={props.deleteBox}
            />
          ))}
        </S.Cmt>
      </S.CommentBox>
    </>
  );
}
