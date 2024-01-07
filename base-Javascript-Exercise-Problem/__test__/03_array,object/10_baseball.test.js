const baseball = require("../../03_array,object/10_baseball");

describe("baseball", () => {
    test(`should return 2`, () => {
      expect(
        baseball([
          {name: "이정후", part: "야구", team: "키움히어로즈"},
          {name: "노원두", part: "야구", team: "코드어벤저스"},
          {name: "손흥민", part: "축구", team: "토트넘홋스퍼"},
          {name: "조아라", part: "복싱", team: "코드어벤저스"},
          {name: "김연경", part: "배구", team: "상하이브라이트"},
          {name: "최정", part: "야구", team: "SSG랜더스"},
          {name: "홍재훈", part: "야구", team: "코드어벤저스"}
        ])
      ).toEqual(2)
    })

    test(`should return 1`, () => {
      expect(
        baseball([
          {name: "Atom", part: "야9", team: "코두어벤저스"},
          {name: "Dave", part: "야그", team: "코즈어벤저스"},
          {name: "Hany", part: "야구", team: "코드어벤져스"},
          {name: "Soora", part: "야고", team: "코드이벤저스"},
          {name: "Junny", part: "야구", team: "코드어벤저스"},
          {name: "Carl", part: "아구", team: "쿄드어벤저스"},
          {name: "Rina", part: "baseball", team: "코드 어벤저스"}
        ])
      ).toEqual(1)
    })
})