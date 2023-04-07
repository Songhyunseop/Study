import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { LikeOutlined } from "@ant-design/icons";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
      size
      createdAt
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function UploadImage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");

  const [Url, setUrl] = useState("");

  const ChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const ChangePw = (event) => {
    setPassword(event.target.value);
  };

  const ChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const ChangeContent = (event) => {
    setContent(event.target.value);
  };

  const ChangeFile = async (event) => {
    const file = event.target.files?.[0];
    const result = await uploadFile({ variables: { file } });

    setUrl(result.data.uploadFile.url);
  };

  const SaveFile = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [Url],
        },
      },
    });

    console.log(result);
  };

  const Fileref = useRef();

  const clickFile = () => {
    Fileref.current.click();
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          style={{ display: "none" }}
          ref={Fileref}
          type="file"
          onChange={ChangeFile}
        />
        작성자 : <input onChange={ChangeWriter} />
        비밀번호 : <input onChange={ChangePw} />
        제목 : <input onChange={ChangeTitle} />
        내용 : <input onChange={ChangeContent} />
        <img
          src={`https://storage.googleapis.com/${Url}`}
          style={{ height: "400px", overflow: "hidden" }}
        ></img>
        <LikeOutlined
          onClick={clickFile}
          style={{ color: "gold", height: "50px" }}
        />
        <button onClick={SaveFile}>저장하기</button>
      </div>
    </>
  );
}
