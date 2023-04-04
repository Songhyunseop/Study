import * as S from "./BoardWrite.styles";
import Modal from "react-modal";
import DaumPostcodeEmbed from "react-daum-postcode";

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
  },
};

const customStyles2 = {
  content: {
    width: "1000px",
    height: "580px",
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

export default function BoardUI(props) {
  return (
    <div>
      <div>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <h2>에러!</h2>
          <div>{props.error}</div>
          <button
            style={{
              backgroundColor: "gold",
              width: "100px",
              height: "30px",
              border: "2px solid #FFBF00",
              boxShadow: "2px 2px black",
              margin: "30px 0px 0px 130px",
            }}
            onClick={props.closeModal}
          >
            닫기
          </button>
        </Modal>
        <Modal
          isOpen={props.addressIsOpen}
          style={customStyles2}
          ariaHideApp={false}
        >
          <DaumPostcodeEmbed
            style={{ width: "950px", height: "450px" }}
            onComplete={props.handleComplete}
            onClose={props.closeBox}
          />
          <button
            style={{
              backgroundColor: "gold",
              width: "100px",
              height: "30px",
              border: "2px solid #FFBF00",
              boxShadow: "2px 2px black",
              margin: "30px 0px 0px 0px",
            }}
            onClick={props.closeBox}
          >
            닫기
          </button>
        </Modal>
        <S.Wrapper>
          <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.NameTag>
            <span>작성자</span>
            <S.NameTagSpan>비밀번호</S.NameTagSpan>
          </S.NameTag>
          <S.Body__header>
            <S.NameBox>
              <S.Writer
                onChange={props.chgWrite}
                type="text"
                placeholder="이름을 적어주세요"
                defaultValue={props.data?.fetchBoard?.writer}
                readOnly={props.isEdit}
              />
              <S.Error>{props.aaa}</S.Error>
            </S.NameBox>
            <S.PwBox>
              <S.Password
                onChange={props.chgPw}
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <S.Error>{props.bbb}</S.Error>
            </S.PwBox>
          </S.Body__header>
          <S.NameTag>제목</S.NameTag>
          <S.TitleBox>
            <S.TitleCt
              onChange={props.chgTitle}
              type="text"
              placeholder="제목을 작성해주세요"
              defaultValue={props.data?.fetchBoard?.title}
            ></S.TitleCt>
            <S.Error>{props.ccc}</S.Error>
          </S.TitleBox>
          <S.ContentsDisplay>
            <S.NameTag>내용</S.NameTag>
            <S.Error>{props.ddd}</S.Error>
          </S.ContentsDisplay>
          <S.Content
            onChange={props.chgContent}
            defaultValue={props.data?.fetchBoard?.contents}
            type="text"
          />
          주소
          <S.Mail>
            <S.AddresNum
              type="text"
              defaultValue={!props.Zipcode ? "07250" : props.Zipcode}
              readOnly={true}
            />
            <S.Btn onClick={props.openBox}>우편번호 검색</S.Btn>
          </S.Mail>
          <S.AddresBox
            readOnly={true}
            type="text"
            defaultValue={props.fullAddress}
          />
          <S.AddresBox type="text" onChange={props.ChangeAddress} />
          <S.NameTag>유튜브</S.NameTag>
          <S.YoutubeLink
            onChange={props.ChangeYoutube}
            type="text"
            placeholder="링크를 복사해 주세요"
          ></S.YoutubeLink>
          <S.NameTag>사진첨부</S.NameTag>
          <S.UploadBox>
            <S.Box>
              <S.Plus>+</S.Plus>
              <br />
              Upload
            </S.Box>
            <S.Box>
              <S.Plus>+</S.Plus>
              <br />
              Upload
            </S.Box>
            <S.Box>
              <S.Plus>+</S.Plus>
              <br />
              Upload
            </S.Box>
          </S.UploadBox>
          <S.NameTag>메인 설정</S.NameTag>
          <S.RadioCheck>
            <input type="radio" name="chk" />
            유튜브
            <input type="radio" name="chk" />
            사진
          </S.RadioCheck>
          <S.SignUp>
            <S.SignUpBtn
              isValid={props.isValid}
              onClick={
                props.isEdit
                  ? props.EditBtn
                  : () => {
                      props.sign(), props.create();
                    }
              }
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.SignUpBtn>
          </S.SignUp>
        </S.Wrapper>
      </div>
    </div>
  );
}
