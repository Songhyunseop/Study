const _function = require("../../01_variable,function,type/04_function");

describe("_function", () => {
    test("If 10 and 1 are given, it should return 10", () => {
      expect(
        _function(10, 1)
      ).toEqual(10)
    })

    test("If 2 and 6 are given, it should return 12", () => {
      expect(
        _function(2, 6)
      ).toEqual(12)
    })

    test("If 9 and 9 are given, it should return 81", () => {
      expect(
        _function(9, 9)
      ).toEqual(81)
    })
})