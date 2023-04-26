import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
      size
    }
  }
`;

export default function ImageFile() {
  const [imgUrl, setImgUrl] = useState("");
  const [files, setFile] = useState();
  //
  const { register, handleSubmit } = useForm();

  const [uploadfile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onChnageFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (e) => {
      setImgUrl(e.currentTarget.result);
      setFile(file);
    };
  };

  const onClickSubmitFile = async (data) => {
    console.log(data);

    const result = await uploadfile({ variables: { file: files } });

    const url = result.data?.uploadFile.url;

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: [url],
        },
      },
    });

    console.log(result2);
  };

  return (
    <>
      <input onChange={onChnageFile} type="file" />
      <br />
      <form onSubmit={handleSubmit(onClickSubmitFile)}>
        작성자 : <input type="text" {...register("writer")} />
        비밀번호 : <input type="password" {...register("password")} />
        제목 : <input type="text" {...register("title")} />
        내용 : <input type="text" {...register("contents")} />
        <button>저장하기</button>
        <img src={imgUrl} />
      </form>
    </>
  );
}
