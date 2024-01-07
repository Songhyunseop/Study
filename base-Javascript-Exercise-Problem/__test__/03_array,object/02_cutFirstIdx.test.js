const cutFirstIdx = require("../../03_array,object/02_cutFirstIdx");

describe("cutFirstIdx", () => {
    test(`If [1, 2, 3, 4, 5] is given, it should return [2, 3, 4, 5]`, () => {
      expect(
        cutFirstIdx([1, 2, 3, 4, 5])
      ).toEqual([2, 3, 4, 5])
    })

    test(`If ["a", "b", "c", "d", "e"] is given, it should return ["b", "c", "d", "e"]`, () => {
      expect(
        cutFirstIdx(["a", "b", "c", "d", "e"])
      ).toEqual(["b", "c", "d", "e"])
    })
})