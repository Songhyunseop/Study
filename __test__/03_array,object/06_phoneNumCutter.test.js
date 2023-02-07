const phoneNumCutter = require("../../03_array,object/06_phoneNumCutter");

describe("phoneNumCutter", () => {
    test(`If ["01012345678", "01087654321", "01099995555"] is given, it should return ["010****5678", "010****4321", "010****5555"]`, () => {
      expect(
        phoneNumCutter(["01012345678", "01087654321", "01099995555"])
      ).toEqual(["010****5678", "010****4321", "010****5555"])
    })

    test(`If ["01011112222", "01033334444", "01087405558"] is given, it should return ["010****2222", "010****4444", "010****5558"]`, () => {
      expect(
        phoneNumCutter(["01011112222", "01033334444", "01087405558"])
      ).toEqual(["010****2222", "010****4444", "010****5558"])
    })

})