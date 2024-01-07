// 1. 문자, 숫자, Boolean (primitive 타입)

const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("철수", 123, true);

const bbb = result[0] * 10;

//
//
//
//
//
// 2. any 타입 => 그냥 js랑 같음을 의미

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", 123, true);

const qqq = result2[0] * 10; // 사실은 result2[0] 은 boolean 타입이지만 10을 곱해도 문제가 되지 않음 (any 타입으로 지정함으로써 js처럼 문제를 파악 못함!)

//
//
//
//
//
// 3. unknown 타입 => 받을 때는 그대로 타입 상관없이 받지만, 실행될 때는 특정 조건이 붙어야함

const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};

const result3 = getUnknown("철수", 123, true);

//
//
//
//
//
// 4. generic 타입 => 쓸 때마다 실행되는 것의 타입에 따라 타입이 바뀌게 됨 (사용자 정의 타입) / 마찬가지로 타입은 어떤 것이든 들어감 (any, unknown 과 비슷)
// 현재 코드 기준으로는 MyType1 의 타입은 string, MyType2의 타입은 Number, MyType3의 타입은 boolean이 됨
const getGeneric = <MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] => {
  return [arg3, arg2, arg1];
};

const result4 = getGeneric("철수", 123, true);

//
//
//
//
//
// 5. generic 타입 => 간략하게 표현
//
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

const result5 = getGeneric2("철수", 123, true);

//
//
//
//
//
// 6. generic 타입 => 간략하게 표현 2
//
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result6 = getGeneric3("철수", 123, true);

//
//
//
//
//
// 7. generic 타입 => 실행 시 특정 타입으로 강제하기
//
const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const result7 = getGeneric4<string, string, string>("철수", 123, true);
// 들어가는 타입은 string이 되도록 강제 (입력값에 따라 변동되지 않고, 지정한 string 타입을 따름)
