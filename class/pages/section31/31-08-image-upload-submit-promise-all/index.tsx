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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async (): Promise<void> => {
    // 안 좋은 예제 - await을 매번 기다려야 함
    // const resultFile1 = await unloadFile({ variables: { file: files[0] } });
    // const resultFile2 = await unloadFile({ variables: { file: files[1] } });
    // const resultFile3 = await unloadFile({ variables: { file: files[2] } });

    // const url0 = resultFile1.data?.uploadFile.url;
    // const url1 = resultFile2.data?.uploadFile.url;
    // const url2 = resultFile3.data?.uploadFile.url;

    // const resultUrls = [url0, url1, url2];

    // //
    // //
    // //
    // // 좋은 예제 - Promise.all 사용
    // const results = await Promise.all([
    //   unloadFile({ variables: { file: files[0] } }),
    //   unloadFile({ variables: { file: files[1] } }),
    //   unloadFile({ variables: { file: files[2] } }),
    // ]);

    // console.log(results); // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0, url1, url2]
    //
    //
    //
    //
    // 좋은 예제 - Promise.all 사용 -> (refactoring 버전)
    // const files = [File0, File1, File2];
    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } }))
    );

    console.log(results); // [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0, url1, url2]
    //
    //
    //
    //
    //
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목쓰",
          contents: "내용쓰",
          images: [resultUrls],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
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
          const tempUrls = [...imageUrls];

          tempUrls[index] = e.target?.result;
          setImageUrls(tempUrls);
          //
          //
          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={wrapAsyncFunc(onChangeFile(0))} />
      <input type="file" onChange={wrapAsyncFunc(onChangeFile(1))} />
      <input type="file" onChange={wrapAsyncFunc(onChangeFile(2))} />

      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />

      <button onClick={wrapAsyncFunc(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
