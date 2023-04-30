import * as yup from "yup";

export const schema = yup.object({
  writer: yup
    .string()
    .min(2, "작성자는 최소 2자이상 작성하셔야 합니다")
    .required("작성자는 필수입력입니다"),
  title: yup.string().required("제목은 필수입력입니다"),
  contents: yup.string().required("내용은 필수입력입니다"),

  // email: yup
  //   .string()
  //   .email("이메일이 잘못된 형식입니다")
  //   .required("이메일은 필수입력입니다"),

  // password: yup
  //   .string()
  //   .min(6, "비밀번호는 최소 4자리 이상입니다")
  //   .max(15, "비밀번호는 최대 15자리만 가능합니다")
  //   .required("비밀번호는 필수입력입니다"),

  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 번호 형식에 맞지 않습니다")
  //   .required("휴대폰 번호는 필수입력입니다"),
});
