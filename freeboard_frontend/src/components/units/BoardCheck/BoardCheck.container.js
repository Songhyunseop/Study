import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "../BoardCheck/BoardCheck.queries";
import Writing from "./BoardCheck.presenter";

export default function WriteBoard(props) {
  const [IsVisible, setIsVisible] = useState(false);

  const [Writer, setWriter] = useState("");
  const [Pw, setPw] = useState("");
  const [Content, setContent] = useState("");

  const [TextLength, setTextLength] = useState("0");

  const [CmtContent, setCmtContent] = useState("");
  const [CmtWriter, setCmtWriter] = useState("");
  const [TargetId, setTargetId] = useState("");
  const [IsClicked, setIsClicked] = useState(false);

  const [RatingVal, setRatingVal] = useState(0);
  const [StarCut, setStarCut] = useState(false);

  const StarArr = [
    { src: "/Star.png", id: 0 },
    { src: "/Star.png", id: 1 },
    { src: "/Star.png", id: 2 },
    { src: "/Star.png", id: 3 },
    { src: "/Star.png", id: 4 },
  ];

  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });

  const { data: data2 } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.number,
    },
  });

  const arr = data2?.fetchBoardComments;

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const getList = () => {
    router.push("/best-list");
  };

  const getEdit = () => {
    router.push(`/board-page1/${router.query.number}/edit`);
  };

  const getDelete = async () => {
    // refetch 후 화면상에 리렌더링 안됨... 뭐가 문제 ??

    await deleteBoard({
      variables: {
        boardId: router.query.number,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,

          variables: { boardId: router.query.number },
        },
      ],
    });

    // router.push("/delete-complete")
  };

  const WriterChk = (event) => {
    setWriter(event.target.value);
  };

  const PwChk = (event) => {
    setPw(event.target.value);
  };

  const ContentChk = (event) => {
    setContent(event.target.value);
    setTextLength(event.target.value.length);
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
    setContent("");
  };

  const clickX = (event) => {
    const rst = arr.filter((el) => el._id === event.target.id);
    console.log(rst);
    setCmtWriter(rst[0].writer);
    setCmtContent(rst[0].contents);
    setTargetId(event.target.id);
    setIsClicked(true);

    console.log("hi");
    console.log(CmtWriter);
    console.log(rst[0]);
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

  const CommentEdit = async () => {
    const myVariables = {
      updateBoardCommentInput: {
        rating: 3,
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

  const StarRate = (idx) => {
    console.log(idx);
    console.log(StarCut);

    setRatingVal(idx + 1);
    setStarCut(!StarCut);

    if (StarCut) {
      setRatingVal(0);
    }
  };

  const toggleVisible = () => {
    setIsVisible(!IsVisible);
  };

  return (
    <div>
      <Writing
        data={data}
        data2={data2}
        arr={arr}
        toggleVisible={toggleVisible}
        IsVisible={IsVisible}
        getList={getList}
        getEdit={getEdit}
        getDelete={getDelete}
        WriterChk={WriterChk}
        PwChk={PwChk}
        ContentChk={ContentChk}
        clickX={clickX}
        ClickSendCmt={ClickSendCmt}
        CommentEdit={CommentEdit}
        CmtDelete={CmtDelete}
        cmtEdit={props.cmtEdit}
        Writer={Writer}
        Content1={Content}
        CmtWriter={CmtWriter}
        CmtContent={CmtContent}
        TextLength={TextLength}
        StarRate={StarRate}
        RatingVal={RatingVal}
        StarArr={StarArr}
        StarCut={StarCut}
      />
    </div>
  );
}
