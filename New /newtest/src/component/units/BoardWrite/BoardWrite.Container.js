import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import WritePresenter from "./BoardWrite.Presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.query";

export default function WriteContainer(props) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState();
  const [writer, setWriter] = useState();
  const [password, setPassword] = useState();

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  const [ImgUrl, setImgUrl] = useState([]);
  const [Changed, setChanged] = useState(false);

  const [ThisIdx, setThisIdx] = useState(0);

  const Fileref = useRef(null);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const ChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const ChangeContents = (event) => {
    setContents(event.target.value);
  };

  const ChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const ChangePw = (event) => {
    setPassword(event.target.value);
  };

  const CreateThis = async () => {
    !title ? setError1("제목을 입력!") : setError1("");
    !contents ? setError2("내용을 입력!") : setError2("");
    !writer ? setError3("작성자를 입력!") : setError3("");
    !password ? setError4("비밀번호를 입력!") : setError4("");

    if (title && contents && writer && password) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              images: ImgUrl,
            },
          },
        });
        console.log(result);
        router.push(`/BoardWrite/${result.data?.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const ClickImg = async (event) => {
    const File = event.target.files?.[0];

    console.log("hellohhlhllhlhl");
    console.log(File);
    const result = await uploadFile({
      variables: {
        file: File,
      },
    });

    setImgUrl((prev) => [...prev, result.data?.uploadFile?.url]);
  };
  console.log(1232131231231231);
  console.log(ImgUrl);
  console.log(1111111);

  const ClickImg1 = (event) => {
    Fileref.current.click();

    setThisIdx(Number(event.currentTarget.id));
    setChanged(true);
  };

  // const ClickImg2 = () => {
  //   Fileref2.current.click();
  // };

  // const ClickImg3 = () => {
  //   Fileref3.current.click();
  // };

  const EditButton = async () => {
    setChanged(false);
    try {
      const myVariables = {
        password: password,
        boardId: router.query.number,
        updateBoardInput: {},
      };

      if (title) myVariables.updateBoardInput.title = title;
      if (contents) myVariables.updateBoardInput.contents = contents;
      if (ImgUrl) myVariables.updateBoardInput.images = [ImgUrl];

      await updateBoard({
        variables: myVariables,
      });

      router.push(`/BoardWrite/${router.query.number}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const canCleBtn1 = () => {
    router.push(`/`);
  };

  const canCleBtn2 = () => {
    router.push(`/BoardWrite/${router.query.number}`);
  };

  console.log(12345);
  console.log(ImgUrl);

  console.log(12345);

  return (
    <>
      <WritePresenter
        ChangeTitle={ChangeTitle}
        ChangeContents={ChangeContents}
        ChangeWriter={ChangeWriter}
        ChangePw={ChangePw}
        CreateThis={CreateThis}
        error1={error1}
        error2={error2}
        error3={error3}
        error4={error4}
        IsEdit={props.IsEdit}
        data={props.data}
        EditButton={EditButton}
        canCleBtn1={canCleBtn1}
        canCleBtn2={canCleBtn2}
        ClickImg={ClickImg}
        ImgUrl={ImgUrl}
        ThisIdx={ThisIdx}
        Fileref={Fileref}
        ClickImg1={ClickImg1}
        Changed={Changed}
      />
    </>
  );
}
