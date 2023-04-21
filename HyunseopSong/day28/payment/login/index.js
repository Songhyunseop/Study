import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  writer: yup
    .string()
    .min(2, "작성자는 최소 2자이상 작성하셔야 합니다")
    .required("작성자는 필수입력입니다"),
  title: yup.string().required("제목은 필수입력입니다"),
  contents: yup.string().required("내용은 필수입력입니다"),
});

export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const router = useRouter();

  const onClickSubmit = (data) => {
    console.log(data);
    router.push("/28/payment/loading");
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      <button
        style={{ backgroundColor: formState.isValid ? "yellow" : "gray" }}
      >
        GraphqlAPI 요청하기
      </button>
    </form>
  );
}
