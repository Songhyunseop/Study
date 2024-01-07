const typeSwitch2 = require("../../01_variable,function,type/09_typeswitch2");

describe("typeSwitch2", () => {
    test("If number 200 is given, it should return string '200'", () => {
      expect(
        typeSwitch2(200)
      ).toEqual("200")
    })

    test("If number 404 is given, it should return string '404'", () => {
      expect(
        typeSwitch2(404)
      ).toEqual("404")
    })

    test("If string '531' is given, it should return string '531'", () => {
      expect(
        typeSwitch2("531")
      ).toEqual("531")
    })
})