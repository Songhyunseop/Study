const addNumber = require("../../01_variable,function,type/06_addnumber");

describe("addNumber", () => {
    test("Return the sum of numbers 9 and 7 in result", () => {
      expect(
        addNumber()
      ).toEqual(16)
    })
})