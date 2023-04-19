import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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

export default function () {
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();
  const { register, handleSubmit, trigger, setValue } = useForm();

  const ReactQuill = dynamic(async () => await import("react-quill"), {
    ssr: false,
  });

  const onChangecontents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  };

  const onClickThis = async (data) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data?.contents,
        },
      },
    });

    router.push(`/27/editor/detail/${result.data?.createBoard._id}`);
  };

  return (
    <form onSubmit={handleSubmit(onClickThis)}>
      작성자:
      <input type="text" {...register("writer")} />
      비번:
      <input type="password" {...register("password")} />
      제목:
      <input type="text" {...register("title")} />
      내용:
      <ReactQuill onChange={onChangecontents} />
      <button>등록하기</button>
    </form>
  );
}
