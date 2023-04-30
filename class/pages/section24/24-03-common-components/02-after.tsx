import { useForm } from "react-hook-form";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("리렌더링 되나요?");
  //
  //
  // Input01, Button01 컴포넌트로 분리하여 import 하기 (src에 따로 저장)

  return (
    <form onSubmit={wrapFormAsyncFunc(handleSubmit(onClickSubmit))}>
      작성자: <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <Input01 register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <Input01 type="text" register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      {/* 이 경우 객체형태로 저장됨 */}
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}
