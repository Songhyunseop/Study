const fac = require("../../02_conditional,string,loop/24_fac");

describe("fac", () => {
  test("If 4 is given, it should return 24", () => {
    expect(
      fac(4)
    ).toEqual(24)
  })

  test("If 10 is given, it should return 3628800", () => {
    expect(
      fac(10)
    ).toEqual(3628800)
  })
})