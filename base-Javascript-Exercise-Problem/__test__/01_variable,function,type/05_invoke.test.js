const invoke = require("../../01_variable,function,type/05_invoke");

describe("invoke", () => {
    test("The 'double' function must be called and input factor 7 must be enter", () => {
      expect(
        invoke()
      ).toEqual(14)
    })
})