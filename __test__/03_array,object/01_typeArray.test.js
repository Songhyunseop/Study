const typeArray = require("../../03_array,object/01_typeArray");

describe("typeArray", () => {
    test(`If [1, "st", true] is given, it should return ["number", "string", "boolean"]`, () => {
      expect(
        typeArray([1, "st", true])
      ).toEqual(['number', 'string', 'boolean'])
    })

    test(`If [undefined, [1, 2], { hello: "world"}] is given, it should return ["undefined", "array", "object"]`, () => {
      expect(
        typeArray([undefined, [1, 2], { hello: "world"}])
      ).toEqual(["undefined", "array", "object"])
    })
})