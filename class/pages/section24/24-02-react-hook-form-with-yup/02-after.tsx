import { useForm } from "react-hook-form";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

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

  return (
    <form onSubmit={wrapFormAsyncFunc(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      {/* 이 경우 객체형태로 저장됨 */}
      <button
        style={{ backgroundColor: formState.isValid ? "yellow" : "gray" }}
      >
        GraphqlAPI 요청하기
      </button>
    </form>
  );
}

// onSubmit의 default 기능 => 주소가 바뀌고 페이지를 이동하려고 하는 기능 (default이기 때문에 페이지 이동을 안 시키려면 이 기본 기능을 따로 막아줘야함)
//
//
// submit 타입 = 버튼 클릭 시 form 태그 안의 모든 요소들을 실행
// reset 타입 = 버튼 클릭 시 form 태그 안의 모든 요소들을 지워버림
// [button의 기본 default 타입 = submit]

/* <form onSubmit={나의함수}>
  <button type="submit">실행해줘</button>
  <button type="reset">지워줘</button>
  <button type="button" onClick={장바구니담기함수}>
    장바구니 담기
  </button>
</form>; */

// form 태그 안에 onclick 함수가 있으면 [장바구니담기함수]가 실행되면서 [나의함수]도 같이 실행됨!
// 따라서 [장바구니담기 함수]만 실행시키고 싶으면 해당 버튼의 타입을 button으로 주면 됨!
