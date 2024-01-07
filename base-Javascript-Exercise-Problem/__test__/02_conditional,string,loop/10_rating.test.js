const rating = require("../../02_conditional,string,loop/10_rating");

describe("rating", () => {
  test("If 101 is given, it should return \"잘못된 입력입니다\"", () => {
    expect(
      rating(101)
    ).toEqual("잘못된 입력입니다")
  })

  test("If 92 is given, it should return \"A등급\"", () => {
    expect(
      rating(92)
    ).toEqual("A등급")
  })

  test("If 87 is given, it should return \"B등급\"", () => {
    expect(
      rating(87)
    ).toEqual("B등급")
  })

  test("If 71 is given, it should return \"C등급\"", () => {
    expect(
      rating(71)
    ).toEqual("C등급")
  })

  test("If 64 is given, it should return \"D등급\"", () => {
    expect(
      rating(64)
    ).toEqual("D등급")
  })

  test("If 42 is given, it should return \"등급 미달\"", () => {
    expect(
      rating(42)
    ).toEqual("등급 미달")
  })

  test("If -10 is given, should return \"잘못된 입력입니다\"", () => {
    expect(
      rating(-10)
    ).toEqual("잘못된 입력입니다")
  })
})