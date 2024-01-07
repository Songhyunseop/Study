import { useMemo, useState } from "react";
import * as S from "./BoardWrite.styles";

export default function WritePresenter(props) {
  const [Imgbox, setImgbox] = useState([]);

  useMemo(() => {
    if (props.ImgUrl[0]) {
      setImgbox((prev) => [...prev, props.ImgUrl[props.ImgUrl.length - 1]]);
    }
  }, [props.ImgUrl]);

  console.log(Imgbox);
  console.log(1111111);

  return (
    <>
      <S.Wrapper>
        <S.WrapperTop>
          {props.IsEdit ? "게시물 수정" : "새 글 작성"}
        </S.WrapperTop>
        <S.WrapperBody>
          <S.TitleBox>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "white",
              }}
            >
              <span style={{ marginBottom: "10px", background: "white" }}>
                제목
              </span>
              <S.Error>{props.error1}</S.Error>
            </div>
            <S.TitleInput
              defaultValue={props.IsEdit ? props.data?.fetchBoard.title : ""}
              onChange={props.ChangeTitle}
            ></S.TitleInput>
          </S.TitleBox>

          <S.ContentBox>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "white",
              }}
            >
              <span style={{ marginBottom: "10px", background: "white" }}>
                내용
              </span>
              <S.Error>{props.error2}</S.Error>
            </div>
            <S.ContentInput
              defaultValue={props.IsEdit ? props.data?.fetchBoard.contents : ""}
              onChange={props.ChangeContents}
            ></S.ContentInput>
          </S.ContentBox>

          <S.Imageset>
            <span style={{ background: "white", marginBottom: "10px" }}>
              이미지
            </span>
            <S.ImageList>
              {new Array(3).fill(1).map((_, idx) => (
                <S.ImgBox key={idx} id={idx} onClick={props.ClickImg1}>
                  <img
                    src="/Plus.png"
                    style={{
                      position: "absolute",
                      width: "24px",
                      height: "24px",
                      zIndex: 1,
                    }}
                  ></img>
                  <img
                    src={`https://storage.googleapis.com/${
                      props.IsEdit && !props.Changed
                        ? props.data?.fetchBoard.images[0]
                        : props.ImgUrl[idx]
                    }`}
                    style={{
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      zIndex: 1,
                      opacity:
                        props.ImgUrl[idx] ||
                        (props.IsEdit && props.data?.fetchBoard.images[0])
                          ? 1
                          : 0,
                    }}
                  ></img>
                </S.ImgBox>
              ))}
              <input
                id={0}
                onChange={props.ClickImg}
                type="file"
                style={{ display: "none" }}
                ref={props.Fileref}
              />
              <input
                id={1}
                onChange={props.ClickImg}
                type="file"
                style={{ display: "none" }}
                ref={props.Fileref}
              />
              <input
                id={2}
                onChange={props.ClickImg}
                type="file"
                style={{ display: "none" }}
                ref={props.Fileref}
              />
            </S.ImageList>
          </S.Imageset>
        </S.WrapperBody>
        <S.WrapperBottom>
          <S.Login>
            <S.WriterBox>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                }}
              >
                <span
                  style={{ marginBottom: "10px", backgroundColor: "white" }}
                >
                  작성자
                </span>
                <S.Error>{props.error3}</S.Error>
              </div>
              <S.Writer
                readOnly={props.IsEdit}
                defaultValue={props.IsEdit ? props.data?.fetchBoard.writer : ""}
                onChange={props.ChangeWriter}
              />
            </S.WriterBox>
            <S.PasswordBox>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                }}
              >
                <span style={{ marginBottom: "10px" }}>비밀번호</span>
                <S.Error>{props.error4}</S.Error>
              </div>
              <S.Password onChange={props.ChangePw} />
            </S.PasswordBox>
          </S.Login>
        </S.WrapperBottom>
      </S.Wrapper>
      <S.BtnBox>
        <S.Create onClick={props.IsEdit ? props.EditButton : props.CreateThis}>
          {props.IsEdit ? "수정" : "등록"}
        </S.Create>
        <S.Cancel onClick={props.IsEdit ? props.canCleBtn2 : props.canCleBtn1}>
          취소
        </S.Cancel>
      </S.BtnBox>
    </>
  );
}
