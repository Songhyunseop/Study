const onlySmall = require("../../02_conditional,string,loop/18_onlySmall");

describe("onlySmall", () => {
  test("If string 'ABCDE' is given, it should return \"abcde\"", () => {
    expect(
      onlySmall("ABCDE")
    ).toEqual("abcde")
  })
  
  test("If string 'hElLO WOrLd' is given, it should return \"hello world\"", () => {
    expect(
      onlySmall("hElLO WOrLd")
    ).toEqual("hello world")
  })

  test("If string 'CoDeCaMP' is given, it should return \"codecamp\"", () => {
    expect(
      onlySmall("CoDeCaMP")
    ).toEqual("codecamp")
  })
})