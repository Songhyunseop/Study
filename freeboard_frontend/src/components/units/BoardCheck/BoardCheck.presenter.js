import * as S from "./BoardCheck.styles";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "400px",
    height: "210px",
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

export default function Writing(props) {
  const router = useRouter();

  console.log(props.data2?.fetchBoardComments[0]?.rating);
  console.log(router.query.id);
  return (
    <div>
      <div>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          ariaHideApp={false}
          afterOpenModal={props.afterOpenModal}
        >
          <h2>삭제되었습니다</h2>
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
              <img
                src="/Location.png"
                onMouseOver={props.toggleVisible}
                onMouseOut={props.toggleVisible}
              ></img>
            </S.Emoji>
          </S.Title>
          {props.IsVisible && <S.AlertBox src="/alertBox.png"></S.AlertBox>}
          <S.Text>
            <span>{props.data?.fetchBoard.boardAddress?.address}</span>
            <br />
            <span>{props.data?.fetchBoard.boardAddress?.addressDetail}</span>
          </S.Text>
          <S.Body>
            <S.UpBox>
              <S.UpBox_Title>{props.data?.fetchBoard.title}</S.UpBox_Title>
              <div
                style={{
                  width: "987px",
                  height: "480px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "auto",
                }}
              >
                {new Array(3).fill(1).map((_, idx) =>
                  props.data?.fetchBoard.images[idx] ? (
                    <img
                      key={idx}
                      style={{
                        width: "400px",
                        height: "500px",
                        marginBottom: "30px",
                      }}
                      src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[idx]}`}
                    ></img>
                  ) : (
                    <div key={idx}></div>
                  )
                )}
              </div>

              {/* {new Array(3).fill(1).map((el, idx) => {
                props.data?.fetchBoard?.images ? (
                  <img src="/video.png"></img>
                ) : (
                  <div>hewfwefewfwe</div>
                );
              })} */}

              <S.ContentsBox>{props.data?.fetchBoard.contents}</S.ContentsBox>
            </S.UpBox>
          </S.Body>
          <S.Bottom>
            <S.DownBox>
              <ReactPlayer
                url={props.data?.fetchBoard.youtubeUrl}
                playing={true}
                width="486px"
                height="240px"
                controls={true}
              />
              <S.DownBox_Like>
                <S.LikeThis
                  onClick={props.LikeCLick}
                  style={{ width: "20px", height: "18px" }}
                  src="/Like.png"
                ></S.LikeThis>
                <S.DisLikeThis
                  onClick={props.DislikeCLick}
                  style={{ width: "20px", height: "18px" }}
                  src="/Dislike.png"
                ></S.DisLikeThis>
              </S.DownBox_Like>
              <S.LikeBox>
                <S.LikeNumber style={{ color: "gold", fontSize: "20px" }}>
                  {props.data?.fetchBoard?.likeCount}
                </S.LikeNumber>
                <S.LikeNumber style={{ color: "gray", fontSize: "20px" }}>
                  {props.data?.fetchBoard?.dislikeCount}
                </S.LikeNumber>
              </S.LikeBox>
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
