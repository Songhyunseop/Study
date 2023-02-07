const string = require("../../01_variable,function,type/10_string");

describe("string", () => {
    test("If string '헌법', '제1조' are given, it should return string '헌법 제1조'", () => {
      expect(
        string("헌법", "제1조")
      ).toEqual("헌법 제1조")
    })

    test("If string '오늘도 열심히', '코딩합시다' are given, it should return string '오늘도 열심히 코딩합시다'", () => {
      expect(
        string("오늘도 열심히", "코딩합시다")
      ).toEqual("오늘도 열심히 코딩합시다")
    })
})