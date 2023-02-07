const penta = require("../../02_conditional,string,loop/25_penta");

describe("penta", () => {
  test("If 16 is given, it should return \"51015\"", () => {
    expect(
      penta(16)
    ).toEqual("51015")
  })

  test("If 4 is given, it should return \"\"", () => {
    expect(
      penta(4)
    ).toEqual("")
  })

  test("If 102 is given, it should return \"5101520253035404550556065707580859095100\"", () => {
    expect(
      penta(102)
    ).toEqual("5101520253035404550556065707580859095100")
  })
})