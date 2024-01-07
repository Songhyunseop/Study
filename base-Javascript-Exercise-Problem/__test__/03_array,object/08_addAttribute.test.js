const addAttribute = require("../../03_array,object/08_addAttribute");

describe("addAttribute", () => {
    test(`If { name : "스타일러", company : "LG", made : "한국" } is given, it should return { name : "스타일러", company : "LG", made : "한국", category : "전자제품" }`, () => {
      expect(
        addAttribute({ name : "스타일러", company : "LG", made : "한국" })
      ).toEqual({ name : "스타일러", company : "LG", made : "한국", category : "전자제품" })
    })

    test(`If { name : "디지털 카메라", company : "캐논", made : "일본" } is given, it should return { name : "디지털 카메라", company : "캐논", made : "일본", category : "전자제품" }`, () => {
      expect(
        addAttribute({ name : "디지털 카메라", company : "캐논", made : "일본" })
      ).toEqual({ name : "디지털 카메라", company : "캐논", made : "일본", category : "전자제품" })
    })
})