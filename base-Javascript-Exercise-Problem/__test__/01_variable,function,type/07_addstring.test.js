const addString = require("../../01_variable,function,type/07_addstring");

describe("addString", () => {
    test("Return the sum of string 7 and number 1 in result", () => {
      expect(
        addString()
      ).toEqual("71")
    })
})