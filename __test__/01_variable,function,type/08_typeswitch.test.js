const typeSwitch = require("../../01_variable,function,type/08_typeswitch");

describe("typeSwitch", () => {
    test("If string '10' is given, it should return number 10", () => {
      expect(
        typeSwitch("10")
      ).toEqual(10)
    })

    test("If string '531' is given, it should return number 531", () => {
      expect(
        typeSwitch("531")
      ).toEqual(531)
    })

    test("If string 'abc' is given, it should return NaN", () => {
      expect(
        typeSwitch("abc")
      ).toEqual(NaN)
    })

    test("If number 123 is given, it should return number 123", () => {
      expect(
        typeSwitch(123)
      ).toEqual(123)
    })
})