const league = require("../../02_conditional,string,loop/27_league");

describe("league", () => {
  test(`If 'ab' is given, it should return ["aa", "ab", "ba", "bb"]`, () => {
    expect(
      league("ab")
    ).toEqual(["aa", "ab", "ba", "bb"])
  })

  test(`If '123' is given, it should return ["11", "12", "13", "21", "22", "23", "31", "32", "33"]`, () => {
    expect(
      league("123")
    ).toEqual(["11", "12", "13", "21", "22", "23", "31", "32", "33"])
  })

  test(`If 'a' is given, should return ["aa"]`, () => {
    expect(
      league("a")
    ).toEqual(["aa"])
  })
})