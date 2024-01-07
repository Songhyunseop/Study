const isEqual = require("../../02_conditional,string,loop/03_isEqual");

describe("isEqual", () => {
  test("If '코드캠프' is given, it should return true", () => {
    expect(
      isEqual("코드캠프")
    ).toEqual(true)
  })

  test("If '코드캠푸' is given, it should return false", () => {
    expect(
      isEqual("코드캠푸")
    ).toEqual(false)
  })
})