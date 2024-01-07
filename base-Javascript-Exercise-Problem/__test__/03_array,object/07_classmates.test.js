const classmates = require("../../03_array,object/07_classmates");

describe("classmates", () => {
    test(`If { name : "철수", class : "2반", home : "구로구" } is given, it should return true`, () => {
      expect(
        classmates({ name : "철수", class : "2반", home : "구로구" })
      ).toEqual(true)
    })

    test(`If { name : "Junny", class : "2반", home : "광명시" } is given, it should return false`, () => {
      expect(
        classmates({ name : "Junny", class : "2반", home : "광명시" })
      ).toEqual(false)
    })

})