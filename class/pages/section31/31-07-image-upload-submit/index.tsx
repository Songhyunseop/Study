import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile 로 업로드 요청 우선 보냄
    // 2. 이후 createBoard 로 게시글 작성 요청 보냄
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목쓰",
          contents: "내용쓰",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    if (file === undefined) return;

    // const result = await unloadFile({ variables: { file } });
    // setImageUrl(result.data?.uploadFile.url);

    // 1. 임시 URL 생성 (1번째 방법) - [임의의 가짜 url 생성] - 최근에 나온 방식이라 지원하는 브라우저가 한정됨
    const result = URL.createObjectURL(file);
    console.log(result);
    //
    //
    // 2. 임시 URL 생성 (2번째 방법) - [진짜 url 생성, 이미지 자체를 url로 변경한 거라 용량이 큼] - 구식 방식이라 대부분의 브라우저에서 지원됨
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      console.log(e.target?.result);

      if (typeof e.target?.result === "string") {
        setImageUrl(e.target?.result);
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsyncFunc(onChangeFile)} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrl} />

      <button onClick={wrapAsyncFunc(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
