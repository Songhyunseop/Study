const cutIn = require("../../02_conditional,string,loop/16_cutIn");

describe("cutIn", () => {
  test("If 'Javascript', 4 are given, it should return \"Java\"", () => {
    expect(
      cutIn("Javascript", 4)
    ).toEqual("Java")
  })

  test("If 'Coding', 0 are given, it should return \"\"", () => {
    expect(
      cutIn("Coding", 0)
    ).toEqual("")
  })
})