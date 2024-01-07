import { useState } from "react";
import * as S from "./CommentItem.styles";

export default function CommentItem(props) {
  //   const [isEdit, setIsEdit] = useState(false);
  const [CmtContent, setCmtContent] = useState("");
  const [CmtWriter, setCmtWriter] = useState("");

  const arr = props.data2?.fetchBoardComments;

  const onClickEdit = (event) => {
    // setIsEdit(!isEdit);
    props.setIsCorrect(event.target.id);

    const rst = arr.filter((el) => el._id === event.target.id);
    console.log(rst);
    setCmtWriter(rst[0].writer);
    setCmtContent(rst[0].contents);
    props.setTargetId(event.target.id);
    props.setRatingVal2(rst[0].rating);
    props.setIsEdit(true);

    // console.log(props.el._id);
    // console.log(props.isCorrect);
  };

  return (
    <>
      {props.isCorrect !== props.el._id || !props.isEdit ? (
        <S.Cmt_Box key={props.el._id}>
          <S.ProfileImage>
            <img src="/Profile.png"></img>
          </S.ProfileImage>
          <S.ProfileLeft>
            <S.CmtUpper>
              <S.CmtUpperBox1>
                <S.UserName>{props.el.writer}</S.UserName>
                <S.RateEdit2>
                  <img
                    src={props.el.rating <= 0 ? "/Star.png" : "/Star2.png"}
                  ></img>
                  <img
                    src={props.el.rating <= 1 ? "/Star.png" : "/Star2.png"}
                  ></img>
                  <img
                    src={props.el.rating <= 2 ? "/Star.png" : "/Star2.png"}
                  ></img>
                  <img
                    src={props.el.rating <= 3 ? "/Star.png" : "/Star2.png"}
                  ></img>
                  <img
                    src={props.el.rating <= 4 ? "/Star.png" : "/Star2.png"}
                  ></img>
                </S.RateEdit2>
              </S.CmtUpperBox1>
              <S.CMtUpperBox2>
                <S.Edit
                  onClick={onClickEdit}
                  id={props.el._id}
                  src="/Pen.png"
                ></S.Edit>
                <S.Delete
                  onClick={props.deleteBox}
                  id={props.el._id}
                  src="/X.png"
                ></S.Delete>
              </S.CMtUpperBox2>
            </S.CmtUpper>
            <S.CmtBottom>
              <S.Cmt_Text>{props.el.contents}</S.Cmt_Text>
              <S.Cmt_CreateDate>
                {props.el.createdAt.slice(0, 10)}
              </S.Cmt_CreateDate>
            </S.CmtBottom>
          </S.ProfileLeft>
        </S.Cmt_Box>
      ) : (
        <S.CmtEditBox key={props.el._id}>
          <S.CmtEditBox_Top>
            <S.InputGroup>
              <input
                readOnly={true}
                defaultValue={CmtWriter}
                type="text"
                style={{
                  width: "120px",
                  height: "30px",
                  border: "1px solid #bdbdbd",
                }}
              />
              <input
                onChange={props.PwChk}
                type="password"
                style={{
                  width: "120px",
                  height: "30px",
                  border: "1px solid #bdbdbd",
                }}
              />
              <S.Rate>
                {props.StarArr2.map((el, idx) => (
                  <img
                    key={idx}
                    src={
                      props.RatingVal2 - 1 >= idx ? "/Star2.png" : "/Star.png"
                    }
                    onClick={() => {
                      props.StarRate2(idx);
                    }}
                  ></img>
                ))}
              </S.Rate>
            </S.InputGroup>
            <S.PencilBox>
              <S.EditPencil onClick={props.CommentEdit}>수정</S.EditPencil>
            </S.PencilBox>
          </S.CmtEditBox_Top>
          <S.ProfileLeft_Edit
            onChange={props.ContentChk}
            defaultValue={CmtContent}
            type="text"
            style={{ border: "1px solid #bdbdbd" }}
          ></S.ProfileLeft_Edit>
        </S.CmtEditBox>
      )}
    </>
  );
}
