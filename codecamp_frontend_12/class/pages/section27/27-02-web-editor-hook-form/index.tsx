// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill/snow.css";
// import { Modal } from "antd";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
//
//
// dynamic 으로 import하여 ssr(server-side-rendering[서버에서 프리렌더링]일 때는 import하지 않고, 서버렌더링 끝난 후 import 되도록 함)
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
//
// let MyModal;
//
export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  //
  //
  // ReactQuill 제작자들이 만든 onChange로 기존의 onChange 함수와는 다르기 때문에 인자로 event객체가 아닌 value가 들어옴!!
  const onChangeContents = (value: string): void => {
    console.log(value);
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능 (setValue)
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange로 변하는 값을 감지하고, 에러 검증 같은 것 해달라고 react-hook-form 에게 알려주는 기능 (trigger가 됨)
    void trigger("contents");
  };
  //   // 방법 1. useEffect 활용해서 모두 렌더링 된 후 Modal이 import 되도록 하기
  //   useEffect(() => {
  //     const aaa = async (): Promise<void> => {
  //       const { Modal } = await import("antd");
  //       MyModal = Modal;
  //     };
  //     void aaa();
  //   }, []);
  //
  //
  //
  //
  // 방법 2. 버튼 클릭 시 모달을 import 해 와서 실행토록 하기
  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // code-splitting (코드스플릿팅)
    Modal.success({ content: "게시글 등록에 성공하였습니다!!!" });
  };

  return (
    <form onSubmit={wrapFormAsyncFunc(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      비밀번호: <input type="password" {...register("password")} />
      제목: <input type="text" {...register("title")} />
      내용: <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
