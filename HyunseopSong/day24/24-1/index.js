import { useForm } from "react-hook-form";

export default function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClickUseData = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickUseData)}>
      작성자: <input type="text" {...register("writer", { required: true })} />
      {errors.writer && <p style={{ color: "red" }}>작성자 입력하셈</p>}
      비밀번호:{" "}
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p style={{ color: "red" }}> 비번 입력하셈</p>}
      제목: <input type="text" {...register("title", { required: true })} />
      {errors.title && <p style={{ color: "red" }}>제목 입력하셈</p>}
      내용:{" "}
      <input type="contents" {...register("contents", { required: true })} />
      {errors.contents && <p style={{ color: "red" }}>내용 입력하셈</p>}
      <button>게시물 등록</button>
    </form>
  );
}
