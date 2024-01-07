const adder = require("../../02_conditional,string,loop/20_adder");

describe("adder", () => {
  test("If 5 is given, it should return 15", () => {
    expect(
      adder(5)
    ).toEqual(15)
  })

  test("If 10 is given, it should return 55", () => {
    expect(
      adder(10)
    ).toEqual(55)
  })

  test("If 100 is given, it should return 5050", () => {
    expect(
      adder(100)
    ).toEqual(5050)
  })
})