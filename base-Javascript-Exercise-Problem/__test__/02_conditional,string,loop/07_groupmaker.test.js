const groupmaker = require("../../02_conditional,string,loop/07_groupmaker");

describe("groupmaker", () => {
  test("If 3 is given, it should return \"A그룹\"", () => {
    expect(
      groupmaker(3)
    ).toEqual("A그룹")
  })

  test("If 5 is given, it should return \"B그룹\"", () => {
    expect(
      groupmaker(5)
    ).toEqual("B그룹")
  })

  test("If 15 is given, it should return \"AB그룹\"", () => {
    expect(
      groupmaker(15)
    ).toEqual("AB그룹")
  })

  test("If 13 is given, it should return \"C그룹\"", () => {
    expect(
      groupmaker(13)
    ).toEqual("C그룹")
  })
})