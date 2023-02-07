const merge = require("../../03_array,object/05_merge");

describe("merge", () => {
    test(`If [1, 2], [3, 4] are given, it should return [1, 2, 3, 4]`, () => {
      expect(
        merge([1, 2], [3, 4])
      ).toEqual([1, 2, 3, 4])
    })

    test(`If ["a", "b"], ["c, d", "e", "f"] are given, it should return ["a", "b", "c, d", "e", "f"]`, () => {
      expect(
        merge(["a", "b"], ["c, d", "e", "f"])
      ).toEqual(["a", "b", "c, d", "e", "f"])
    })
})