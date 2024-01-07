const ageFilter = require("../../02_conditional,string,loop/02_agefilter");

describe("ageFilter", () => {
  test("If 30 is given, it should return \"성인\"", () => {
    expect(
      ageFilter(30)
    ).toEqual("성인")
  })

  test("If 20 is given, it should return \"성인\"", () => {
    expect(
      ageFilter(20)
    ).toEqual("성인")
  })

  test("If 19 is given, it should return \"학생\"", () => {
    expect(
      ageFilter(19)
    ).toEqual("학생")
  })

  test("If 17 is given, it should return \"학생\"", () => {
    expect(
      ageFilter(17)
    ).toEqual("학생")
  })

  test("If 8 is given, it should return \"학생\"", () => {
    expect(
      ageFilter(8)
    ).toEqual("학생")
  })

  test("If 7 is given, it should return \"어린이\"", () => {
    expect(
      ageFilter(7)
    ).toEqual("어린이")
  })

  test("If 5 is given, it should return \"어린이\"", () => {
    expect(
      ageFilter(5)
    ).toEqual("어린이")
  })
})