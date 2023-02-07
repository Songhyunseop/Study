const even = require("../../02_conditional,string,loop/22_even");

describe("even", () => {
  test("If 2 is given, it should return true", () => {
    expect(
      even(2)
    ).toEqual(true)
  })

  test("If 3 is given, it should return false", () => {
    expect(
      even(3)
    ).toEqual(false)
  })
})