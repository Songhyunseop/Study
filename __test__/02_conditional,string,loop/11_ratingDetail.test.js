const ratingDetail = require("../../02_conditional,string,loop/11_ratingDetail");

describe("ratingDetail", () => {
  test("If 101 is given, it should return \"잘못된 입력입니다\"", () => {
    expect(
      ratingDetail(101)
    ).toEqual("잘못된 입력입니다")
  })

  test("If 99 is given, it should return \"A+\"", () => {
    expect(
      ratingDetail(99)
    ).toEqual("A+")
  })

  test("If 96 is given, it should return \"A\"", () => {
    expect(
      ratingDetail(96)
    ).toEqual("A")
  })

  test("If 91 is given, it should return \"A-\"", () => {
    expect(
      ratingDetail(91)
    ).toEqual("A-")
  })

  test("If 87 is given, it should return \"B+\"", () => {
    expect(
      ratingDetail(87)
    ).toEqual("B+")
  })

  test("If 85 is given, it should return \"B\"", () => {
    expect(
      ratingDetail(85)
    ).toEqual("B")
  })

  test("If 82 is given, it should return \"B-\"", () => {
    expect(
      ratingDetail(82)
    ).toEqual("B-")
  })

  test("If 78 is given, it should return \"C+\"", () => {
    expect(
      ratingDetail(78)
    ).toEqual("C+")
  })

  test("If 76 is given, it should return \"C\"", () => {
    expect(
      ratingDetail(76)
    ).toEqual("C")
  })

  test("If 73 is given, it should return \"C-\"", () => {
    expect(
      ratingDetail(73)
    ).toEqual("C-")
  })

  test("If 67 is given, it should return \"D+\"", () => {
    expect(
      ratingDetail(67)
    ).toEqual("D+")
  })

  test("If 64 is given, it should return \"D\"", () => {
    expect(
      ratingDetail(64)
    ).toEqual("D")
  })

  test("If 60 is given, it should return \"D-\"", () => {
    expect(
      ratingDetail(60)
    ).toEqual("D-")
  })

  test("If 58 is given, it should return \"등급 미달\"", () => {
    expect(
      ratingDetail(58)
    ).toEqual("등급 미달")
  })

  test("If -10 is given, it should return \"잘못된 입력입니다\"", () => {
    expect(
      ratingDetail(-10)
    ).toEqual("잘못된 입력입니다")
  })
})