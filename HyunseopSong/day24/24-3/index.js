import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input01 from "../../../src/components/commons/inputs/01";
import Button01 from "../../../src/components/commons/buttons/01";

const schema = yup.object({
  writer: yup
    .string()
    .required("입력똑바로하셈")
    .max(5, "길이제한요~")
    .matches(/^[ㄱ-ㅎ가-힣a-zA-Z]+$/, "그거 맞냐?"),
  password: yup
    .string()
    .required("입력똑바로하셈")
    .max(8, "길이제한요~")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,8}$/,
      "그거 맞냐?"
    ),
  title: yup
    .string()
    .required("입력똑바로하셈")
    .matches(/^[ㄱ-힣a-zA-Z]{1,100}$/, "그거 맞냐?"),
  contents: yup
    .string()
    .required("입력똑바로하셈")
    .matches(/^[ㄱ-힣a-zA-Z]{1,1000}$/, "그거 맞냐?"),
});

export default function ReactForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickUseData = (data) => {
    console.log("hi");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickUseData)}>
      작성자: <Input01 register={register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      비밀번호: <Input01 type="password" register={register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      제목: <Input01 register={register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <Input01 register={register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <Button01 isValid={formState.isValid}></Button01>
    </form>
  );
}
