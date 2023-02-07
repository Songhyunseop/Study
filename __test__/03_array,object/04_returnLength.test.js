const returnLength = require("../../03_array,object/04_returnLength");

describe("returnLength", () => {
    test(`If [1, 2, 3, 4, 5] is given, it should return 5`, () => {
      expect(
        returnLength([1, 2, 3, 4, 5])
      ).toEqual(5)
    })

    test(`If ["a, b, c", "d", "e"] is given, it should return 3`, () => {
      expect(
        returnLength(["a, b, c", "d", "e"])
      ).toEqual(3)
    })
})