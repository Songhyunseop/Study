const finder = require("../../02_conditional,string,loop/26_finder");

describe("finder", () => {
  test("If '+-++-*+-%', '+' are given, it should return 4", () => {
    expect(
      finder("+-++-*+-%", "+")
    ).toEqual(4)
  })

  test("If '+-++-*+-%', '-' are given, it should return 3", () => {
    expect(
      finder("+-++-*+-%", "-")
    ).toEqual(3)
  })

  test("If '+-++-*+-%', '/' are given, it should return 0", () => {
    expect(
      finder("+-++-*+-%", "/")
    ).toEqual(0)
  })
})