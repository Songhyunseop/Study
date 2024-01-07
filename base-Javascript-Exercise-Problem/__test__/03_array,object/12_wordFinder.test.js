const wordFinder = require("../../03_array,object/12_wordFinder");

describe("wordFinder", () => {
    test(`If 'this is the MOMENT, THIS IS THE day' is given, it should return {
        this : 2,
        is : 2,
        the : 2,
        moment : 1,
        day : 1
      }`, () => {
      expect(
        wordFinder("this is the MOMENT, THIS IS THE day")
      ).toEqual({
        this : 2,
        is : 2,
        the : 2,
        moment : 1,
        day : 1
      })
    })

    test(`If 'a aA a aAA A aA Aaa AAaA B Bc' is given, it should return {
      a : 3,
      aa : 2,
      aaa : 2,
      aaaa : 1,
      b : 1,
      bc : 1
    }`, () => {
    expect(
      wordFinder("a aA a aAA A aA Aaa AAaA B Bc")
    ).toEqual({
      a : 3,
      aa : 2,
      aaa : 2,
      aaaa : 1,
      b : 1,
      bc : 1
    })
  })
})