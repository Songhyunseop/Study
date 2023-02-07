const calculatefunction = require("../../02_conditional,string,loop/08_calculatefunction");

describe("calculatefunction", () => {
  test("If 5, 5, '+' are given, it should return 10", () => {
    expect(
      calculatefunction(5, 5, "+")
    ).toEqual(10)
  })

  test("If 1, 10, '-' are given, it should return -9", () => {
    expect(
      calculatefunction(1, 10, "-")
    ).toEqual(-9)
  })

  test("If 5, 11, '*' are given, it should return 55", () => {
    expect(
      calculatefunction(5, 11, "*")
    ).toEqual(55)
  })

  test("If 10, 2, '/' are given, it should return 5", () => {
    expect(
      calculatefunction(10, 2, "/")
    ).toEqual(5)
  })

  test("If 22, 2, '%' are given, it should return 0", () => {
    expect(
      calculatefunction(22, 2, "%")
    ).toEqual(0)
  })
})