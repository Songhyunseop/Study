const cutOut = require("../../02_conditional,string,loop/17_cutOut");

describe("cutOut", () => {
  test("If 'Javascript', 4 are given, it should return \"script\"", () => {
    expect(
      cutOut("Javascript", 4)
    ).toEqual("script")
  })

  test("If 'Coding', 0 are given, should return \"Coding\"", () => {
    expect(
      cutOut("Coding", 0)
    ).toEqual("Coding")
  })
})