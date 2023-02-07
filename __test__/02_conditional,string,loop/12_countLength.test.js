const countLength = require("../../02_conditional,string,loop/12_countLength");

describe("countLength", () => {
  test("If string 'abc' is given, it should return 3", () => {
    expect(
      countLength("abc")
    ).toEqual(3)
  })

  test("If string 'A B C D E' is given, it should return 9", () => {
    expect(
      countLength("A B C D E")
    ).toEqual(9)
  })
})