// @ 데코레이터란 ?
function bbb(qqqqqq: any) {
  console.log("---------");
  console.log(qqqqqq);
  console.log("---------");
}

// @bbb = 함수, bbb 함수 안에 qqqqqq 매개변수의 인자로 class Board 가 들어가게 됨
@bbb
class Board {
  // number: number
  // writer: String
}
