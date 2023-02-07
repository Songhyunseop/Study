const idxString = require("../../02_conditional,string,loop/23_idxString");

describe("idxString", () => {
  test("If 11 is given, it should return \"01234567891011\"", () => {
    expect(
      idxString(11)
    ).toEqual("01234567891011")
  })

  test("If 0 is given, it should return \"0\"", () => {
    expect(
      idxString(0)
    ).toEqual("0")
  })

  test("If -2 is given, it should return \"0-1-2\"", () => {
    expect(
      idxString(-2)
    ).toEqual("0-1-2")
  })
})