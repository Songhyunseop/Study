import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("적합하지 않은 형식입니다")
    .required("이메일은 필수사항입니다"),

  password: yup
    .string()
    .min(6, "비밀번호는 최소 6자리 이상입니다")
    .required("비밀번호는 필수사항입니다"),
});
