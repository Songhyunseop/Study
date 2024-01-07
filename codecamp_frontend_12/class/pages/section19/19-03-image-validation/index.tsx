import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [unloadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유 : <input type="file" multiple /> 일 경우, 여러 개를 드래그가 가능하기 때문
    // 배열 앞에도 optionalChaining 붙일 수 있음!! (event.target.files 가 존재하면 그 것의 0번째 index의 값을 file 변수에 할당하라는 뜻)

    const isValid = checkValidationFile(file);
    if (!isValid) return;
    // 파일 크기 검증하는 if문 로직을 따로 src 폴더 안의 파일에 빼서 저장
    // 이후 그 로직의 return 값을 true, false로 나눔
    // checkValidationFile 함수를 변수 isValid에 담고 결과적으로 isValid의 boolean 값에 따라 여기 함수 전체의 종료 여부 결정 가능
    // [컴포넌트가 분리되었을 때 src 상의 로직의 If문 결과에 따라 여기 이 곳의 함수 종료여부 결정을 위해 사용하는 방식이라 할 수 있음]

    //
    const result = await unloadFile({ variables: { file } });

    setImageUrl(result.data?.uploadFile.url);
  };

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg,image/png"
        // accept로 더 간편하게 해당 확장자만 선택가능하게도 할 수 있음
      />

      <img
        src={
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `https://storage.googleapis.com/${imageUrl}`
        }
      />
    </>
  );
}
