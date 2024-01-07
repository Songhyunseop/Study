const countDays = require("../../02_conditional,string,loop/09_countdays");

describe("countDays", () => {
  test("should return 31, when month is 1", () => {
    expect(
      countDays(1)
    ).toEqual(31)
  })

  test("should return 29, when month is 2", () => {
    expect(
      countDays(2)
    ).toEqual(29)
  })

  test("should return 31, when month is 3", () => {
    expect(
      countDays(3)
    ).toEqual(31)
  })

  test("should return 30, when month is 4", () => {
    expect(
      countDays(4)
    ).toEqual(30)
  })

  test("should return 31, when month is 5", () => {
    expect(
      countDays(5)
    ).toEqual(31)
  })

  test("should return 30, when month is 6", () => {
    expect(
      countDays(6)
    ).toEqual(30)
  })

  test("should return 31, when month is 7", () => {
    expect(
      countDays(7)
    ).toEqual(31)
  })

  test("should return 31, when month is 8", () => {
    expect(
      countDays(8)
    ).toEqual(31)
  })

  test("should return 30, when month is 9", () => {
    expect(
      countDays(9)
    ).toEqual(30)
  })

  test("should return 31, when month is 10", () => {
    expect(
      countDays(10)
    ).toEqual(31)
  })

  test("should return 30, when month is 11", () => {
    expect(
      countDays(11)
    ).toEqual(30)
  })

  test("should return 31, when month is 12", () => {
    expect(
      countDays(12)
    ).toEqual(31)
  })
})