const verify = require("../../02_conditional,string,loop/15_verify");

describe("verify", () => {
  test("If 'codecamp', '!abcdefg!' are given, it should return true", () => {
    expect(
      verify("codecamp", "!abcdefg!")
    ).toEqual(true)
  })

  test("If 'codecamp', 'abcdefgh' are given, it should return false", () => {
    expect(
      verify("codecamp", "abcdefgh")
    ).toEqual(false)
  })

  test("If '코드캠프', 'abcdefgh' are given, it should return false", () => {
    expect(
      verify("코드캠프", "abcdefgh")
    ).toEqual(false)
  })
})