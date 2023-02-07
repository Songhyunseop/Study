const levelFilter = require("../../02_conditional,string,loop/01_levelfilter");

describe("levelFilter", () => {
    test("If Lv.40 is given, it should return true", () => {
      expect(
        levelFilter(40)
      ).toEqual(true)
    })

    test("If Lv.30 is given, it should return true", () => {
        expect(
          levelFilter(30)
        ).toEqual(true)
    })

    test("If Lv.29 is given, it should return false", () => {
        expect(
          levelFilter(29)
        ).toEqual(false)
    })
})