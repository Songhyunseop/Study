const isEven = require("../../02_conditional,string,loop/04_isEven");

describe("isEven", () => {
  test("If 10 is given, it should return true", () => {
    expect(
      isEven(10)
    ).toEqual(true)
  })

  test("If 0 is given, it should return true", () => {
    expect(
      isEven(0)
    ).toEqual(true)
  })

  test("If 3 is given, it should return false", () => {
    expect(
      isEven(3)
    ).toEqual(false)
  })
})