const isUnique = require("../../02_conditional,string,loop/28_isUnique");

describe("isUnique", () => {
  test("If 'abcd' is given, it should return false", () => {
    expect(
      isUnique("abcd")
    ).toEqual(false)
  })

  test("If '0102' is given, it should return true", () => {
    expect(
      isUnique("0102")
    ).toEqual(true)
  })
})