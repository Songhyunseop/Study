// hof 의 generic 타입 지정 - (일반함수)

function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("영희")(8);

//
//
//
//
//
// hof 의 generic 타입 지정 - (화살표 함수)

// prettier-ignore
const first2 = <T>(arg1: T) =>  <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result2 = first2("영희")(8);

//
//
//
//
// Hof - 로그인 체크 generic 타입 지정
// prettier-ignore
const LoginCheck =<C>(Component: C) =><P>(props: P): [C, P] => {
    return [Component, props];
};

const result3 = LoginCheck("영희")(8);
