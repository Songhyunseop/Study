const school = require("../../03_array,object/09_school");

describe("school", () => {
    test(`should return ["Jonny", "Hoony"]`, () => {
      expect(
        school([
          { name : "Jonny", school : "코드초등학교", age : "8" },
          { name : "Danny", school : "캠프초등학교", age : "10" },
          { name : "Yonny", school : "프리초등학교", age : "9" },
          { name : "Hoony", school : "코드초등학교", age : "8" },
        ])
      ).toEqual(["Jonny", "Hoony"])
    })
})