import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./LoginPage.styles";
import { useForm } from "react-hook-form";
import { schema } from "./Validation";
import Link from "next/link";

export default function LoginPresenter(props) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { isValid } = formState;

  //
  return (
    <>
      <S.Wrapper>
        <form id="LoginForm" onSubmit={handleSubmit(props.ClickLogin)}>
          <S.LoginBox>
            <S.Title>
              여기 로그인 화면임, 아무튼 로그인 화면 맞음, 걍 그런거임
            </S.Title>

            <S.InputBox>
              <span>이메일</span>
              <S.Email type="text" {...register("email")} />
              <S.ErrorBox>{formState.errors.email?.message}</S.ErrorBox>
              <span>비밀번호</span>
              <S.Password type="password" {...register("password")} />
              <S.ErrorBox>{formState.errors.password?.message}</S.ErrorBox>
            </S.InputBox>
            <S.SideMenuBox>
              <S.LogInBtn isValid={isValid} disabled={!isValid}>
                Log in
              </S.LogInBtn>
              <S.SignUp>
                <Link href="/Signup">아직 회원이 아니신가요?</Link>
              </S.SignUp>
            </S.SideMenuBox>
          </S.LoginBox>
        </form>
      </S.Wrapper>
    </>
  );
}
