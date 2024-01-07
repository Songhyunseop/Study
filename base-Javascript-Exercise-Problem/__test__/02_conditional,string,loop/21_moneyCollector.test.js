const moneyCollector = require("../../02_conditional,string,loop/21_moneyCollector");

describe("moneyCollector", () => {
  test("If '이 물건은 5$ 입니다.' is given, it should return 7", () => {
    expect(
      moneyCollector("이 물건은 5$ 입니다.")
    ).toEqual(7)
  })

  test("If '이 물건은 5,000₩ 입니다.' is given, it should return \"찾을 수 없음\"", () => {
    expect(
      moneyCollector("이 물건은 5,000₩ 입니다.")
    ).toEqual("찾을 수 없음")
  })
})