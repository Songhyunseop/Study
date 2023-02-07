const cutLastIdx = require("../../03_array,object/03_cutLastIdx");

describe("cutLastIdx", () => {
    test(`If [1, 2, 3, 4, 5] is given, it should return [[1, 2, 3, 4, 5], [1, 2, 3, 4]]`, () => {
      expect(
        cutLastIdx([1, 2, 3, 4, 5])
      ).toEqual([[1, 2, 3, 4, 5], [1, 2, 3, 4]])
    })

    test(`If ["a", "b", "c", "d", "e"] is given, it should return [["a", "b", "c", "d", "e"], ["a", "b", "c", "d"]]`, () => {
      expect(
        cutLastIdx(["a", "b", "c", "d", "e"])
      ).toEqual([["a", "b", "c", "d", "e"], ["a", "b", "c", "d"]])
    })
})