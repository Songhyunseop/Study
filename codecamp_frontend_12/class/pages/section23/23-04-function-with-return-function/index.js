// 1. 함수를 리턴하는 함수
// function aaa() {
//   const apple = 10;
//   // console.log(qqq);

//   return function bbb() {
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//   };
// }

// aaa();

//
//
// 2. 함수를 리턴하는 함수 - 인자
// function aaa(apple) {
//   return function (banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }

// aaa(100)(500);

//
//
// 3. 함수를 리턴하는 함수 - 화살표함수
// const aaa = (apple) => (banana) => {
//   console.log(banana);
//   console.log(apple);
// };

// aaa(100)(500);

//
//
// 4. 함수를 리턴하는 함수 - 인자 여러개
const aaa = (apple) => (banana) => (tomato) => (orange) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
  console.log(orange);
};

aaa(100)(500)(300)(400);
