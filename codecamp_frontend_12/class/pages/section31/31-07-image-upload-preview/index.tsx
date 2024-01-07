import { ChangeEvent, useState } from "react";
// import { gql, useMutation } from "@apollo/client";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../../src/commons/types/generated/types";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  //   const [unloadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);

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

      if (typeof e.target?.result === "string") setImageUrl(e.target?.result);
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsyncFunc(onChangeFile)} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <img src={imageUrl} />
    </>
  );
}
