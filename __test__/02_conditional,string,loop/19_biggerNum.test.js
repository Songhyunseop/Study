const biggerNum = require("../../02_conditional,string,loop/19_biggerNum");

describe("biggerNum", () => {
  test("If 6, 7 are given, it should return \"6은(는) 7보다 작습니다\"", () => {
    expect(
      biggerNum(6, 7)
    ).toEqual("6은(는) 7보다 작습니다")
  })
  
  test("If 9, 1 are given, it should return \"9은(는) 1보다 큽니다\"", () => {
    expect(
      biggerNum(9, 1)
    ).toEqual("9은(는) 1보다 큽니다")
  })

  test("If 5, 5 are given, it should return \"5은(는) 5와 같습니다\"", () => {
    expect(
      biggerNum(5, 5)
    ).toEqual("5은(는) 5와 같습니다")
  })
})