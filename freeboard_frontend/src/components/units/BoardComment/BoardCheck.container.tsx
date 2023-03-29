import CommentWriting from "../BoardComment/BoardCheck.presenter";

import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./BoardCheck.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect } from "react";

export default function BoardCommentPage(props) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [Writer, setWriter] = useState("");
  const [Pw, setPw] = useState("");
  const [Content, setContent] = useState("");

  const [TextLength, setTextLength] = useState("0");

  const [CmtContent, setCmtContent] = useState("");
  const [CmtWriter, setCmtWriter] = useState("");
  const [TargetId, setTargetId] = useState("");
  const [IsClicked, setIsClicked] = useState(false);
  const [IsClicked2, setIsClicked2] = useState(false);

  const [RatingVal, setRatingVal] = useState(0);
  const [StarCut, setStarCut] = useState(false);

  const WriterChk = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    console.log(event);
  };

  const PwChk = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const ContentChk = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);

    setTextLength(String(event.target.value.length));
  };

  const StarArr = [
    { src: "/Star.png", id: 0 },
    { src: "/Star.png", id: 1 },
    { src: "/Star.png", id: 2 },
    { src: "/Star.png", id: 3 },
    { src: "/Star.png", id: 4 },
  ];

  const { data: data2 } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.number,
    },
  });

  const arr = data2?.fetchBoardComments;

  const CommentEdit = async () => {
    const myVariables = {
      updateBoardCommentInput: {
        rating: RatingVal,
      },
      boardCommentId: router.query.id,
    };

    if (Content) {
      myVariables.updateBoardCommentInput.contents = Content;
    }

    if (Pw) {
      myVariables.password = Pw;
    }

    try {
      const result = await updateBoardComment({ variables: myVariables });
      console.log(result);
      router.push(`/board-page1/${router.query.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const CmtDelete = async (event) => {
    // async, await 입력 없이 mutation의 try, catch 작성하면
    // 오류에 대한 catch를 잡아내서 에러메시지를 띄우지 못함(동기적으로 처리가 완료되지 않았기 때문인듯)

    try {
      const rst = arr.filter((el) => el._id === event.target.id);

      const DeletePw = prompt("비밀번호를 입력하세요");

      await deleteBoardComment({
        variables: {
          password: DeletePw,
          boardCommentId: rst[0]._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.number,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const ClickSendCmt = async () => {
    if (Writer && Content && Pw) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: Writer,
              password: Pw,
              contents: Content,
              rating: RatingVal,
            },
            boardId: router.query.number,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {
                boardId: router.query.number,
              },
            },
          ],
        });
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("빈 칸을 입력해주세요");
    }

    setWriter("");
    setPw("");
    setContent("");
  };

  const clickX = (event) => {
    const rst = arr.filter((el) => el._id === event.target.id);
    console.log(rst);
    setCmtWriter(rst[0].writer);
    setCmtContent(rst[0].contents);
    setTargetId(event.target.id);
    setIsClicked(true);
  };

  useEffect(() => {
    // useEffect 사용해서 IsClicked의 값이 바뀌면서, true일 때만 라우팅 되도록 함
    // useEffect를 사용해서 setState()의 비동기처리 문제 (값이 바뀌면 바로 할당되어 아래의 라우터 경로에 포함되지 않는 문제) 를 해결할 수 있음
    if (IsClicked) {
      router.push(
        `/board-cmt-edit/${router.query.number}?id=${TargetId}&writer=${CmtWriter}&Content=${CmtContent}`
      );
      setIsClicked(false);
    }
  }, [IsClicked]);

  const StarRate = (idx) => {
    console.log(idx);
    console.log(StarCut);

    setRatingVal(idx + 1);

    setStarCut(!StarCut);

    if (StarCut) {
      setRatingVal(0);
    }
  };

  const onClickReset = () => {
    setIsClicked2(true);
  };

  return (
    <>
      <CommentWriting
        cmtEdit={props.cmtEdit}
        Writer={Writer}
        Pw={Pw}
        Content={Content}
        data2={data2}
        WriterChk={WriterChk}
        PwChk={PwChk}
        ContentChk={ContentChk}
        CmtContent={CmtContent}
        CmtWriter={CmtWriter}
        StarArr={StarArr}
        CommentEdit={CommentEdit}
        CmtDelete={CmtDelete}
        TextLength={TextLength}
        ClickSendCmt={ClickSendCmt}
        clickX={clickX}
        RatingVal={RatingVal}
        StarRate={StarRate}
        onClickReset={onClickReset}
        IsClicked2={IsClicked2}
      />
    </>
  );
}
