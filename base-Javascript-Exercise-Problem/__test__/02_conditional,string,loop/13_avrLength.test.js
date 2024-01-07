const avrLength = require("../../02_conditional,string,loop/13_avrLength");

describe("avrLength", () => {
  test("If string '자바스크립트', ' 연습 공부' are given, it should return 6", () => {
    expect(
      avrLength("자바스크립트", " 연습 공부")
    ).toEqual(6)
  })

  test("If string '코드캠프', '' are given, it should return 2", () => {
    expect(
      avrLength("코드캠프", "")
    ).toEqual(2)
  })

  test("If string 'abc', 'cdef' are given, it should return 3.5", () => {
    expect(
      avrLength("abc", "cdef")
    ).toEqual(3.5)
  })
})