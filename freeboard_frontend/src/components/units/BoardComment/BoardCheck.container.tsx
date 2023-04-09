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
import { ChangeEvent } from "react";

export default function BoardCommentPage(props) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const [Writer, setWriter] = useState("");
  const [Pw, setPw] = useState("");
  const [Content, setContent] = useState("");
  const [TargetId, setTargetId] = useState("");
  const [Target2, setTarget2] = useState("");

  const [TextLength, setTextLength] = useState("0");

  const [IsClicked2, setIsClicked2] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [RatingVal, setRatingVal] = useState(0);
  const [RatingVal2, setRatingVal2] = useState(0);

  const [StarCut, setStarCut] = useState(false);

  const [DeleteIsOpen, setDeleteIsOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const [DeletePw, setDeletePw] = useState("");

  const WriterChk = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const PwChk = (event: ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const ContentChk = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);

    setTextLength(String(event.target.value.length));
  };

  const DeletePwChk = (event) => {
    setDeletePw(event.target.value);
  };

  const StarArr = [
    { src: "/Star.png", id: 0 },
    { src: "/Star.png", id: 1 },
    { src: "/Star.png", id: 2 },
    { src: "/Star.png", id: 3 },
    { src: "/Star.png", id: 4 },
  ];

  const StarArr2 = [...StarArr];

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteBox = (event) => {
    setTarget2(event.target.id);
    setDeleteIsOpen(!DeleteIsOpen);
  };

  const { data: data2, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.number,
    },
  });

  // console.log(111111111111111);
  console.log(data2?.fetchBoardComments.length);

  const onLoadMore = () => {
    if (data2 === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((data2?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(111111111111111);
        console.log(prev);
        console.log(fetchMoreResult, 123);
        console.log(111111111111111);
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  };

  const CommentEdit = async () => {
    const myVariables = {
      updateBoardCommentInput: {
        rating: RatingVal2,
      },
      boardCommentId: TargetId,
    };

    if (Content) {
      myVariables.updateBoardCommentInput.contents = Content;
    }

    if (Pw) {
      myVariables.password = Pw;
    }

    try {
      const result = await updateBoardComment({ variables: myVariables });
    } catch (error) {
      setError(error.message);
      openModal();
    }

    setIsEdit(false);
    setPw("");
    setContent("");
  };

  const CmtDelete = async () => {
    // async, await 입력 없이 mutation의 try, catch 작성하면
    // 오류에 대한 catch를 잡아내서 에러메시지를 띄우지 못함(동기적으로 처리가 완료되지 않았기 때문인듯)
    setDeleteIsOpen(false);
    try {
      // const DeletePw = prompt("비밀번호를 입력하세요");

      await deleteBoardComment({
        variables: {
          password: DeletePw,
          boardCommentId: Target2,
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
      setError(error.message);
      openModal();
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
        setError(error.message);
        openModal();
      }
    } else {
      setError("빈 칸을 입력해주세요");
      openModal();
    }

    setWriter("");
    setPw("");
    setContent("");
  };

  // useEffect(() => {
  //   // useEffect 사용해서 IsClicked의 값이 바뀌면서, true일 때만 라우팅 되도록 함
  //   // useEffect를 사용해서 setState()의 비동기처리 문제 (값이 바뀌면 바로 할당되어 아래의 라우터 경로에 포함되지 않는 문제) 를 해결할 수 있음
  //   if (IsClicked) {
  //     router.push(
  //       `/board-cmt-edit/${router.query.number}?id=${TargetId}&writer=${CmtWriter}&Content=${CmtContent}`
  //     );
  //     setIsClicked(false);
  //   }
  // }, [IsClicked]);

  const StarRate = (idx) => {
    console.log(idx);
    console.log(StarCut);

    setRatingVal(idx + 1);

    setStarCut(!StarCut);

    if (StarCut) {
      setRatingVal(0);
    }
  };

  const StarRate2 = (idx) => {
    console.log(idx);
    console.log(StarCut);

    setRatingVal2(idx + 1);

    setStarCut(!StarCut);

    if (StarCut) {
      setRatingVal2(0);
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
        DeletePwChk={DeletePwChk}
        StarArr={StarArr}
        CommentEdit={CommentEdit}
        CmtDelete={CmtDelete}
        TextLength={TextLength}
        ClickSendCmt={ClickSendCmt}
        RatingVal={RatingVal}
        StarRate={StarRate}
        onClickReset={onClickReset}
        IsClicked2={IsClicked2}
        StarArr2={StarArr2}
        StarRate2={StarRate2}
        RatingVal2={RatingVal2}
        setRatingVal2={setRatingVal2}
        setTargetId={setTargetId}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        DeleteIsOpen={DeleteIsOpen}
        deleteBox={deleteBox}
        error={error}
        onLoadMore={onLoadMore}
      />
    </>
  );
}
