const dualOption = require("../../02_conditional,string,loop/06_dualoption");

describe("dualOption", () => {
  test("If 32 is given, it should return true", () => {
    expect(
      dualOption(32)
    ).toEqual(true)
  })

  test("If 31 is given, it should return false", () => {
    expect(
      dualOption(31)
    ).toEqual(false)
  })

  test("If 28 is given, it should return false", () => {
    expect(
      dualOption(28)
    ).toEqual(false)
  })
})