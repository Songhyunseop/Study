
const korean = /^[ㄱ-ㅎ|가-힣]+$/
let str = "송현섭"


console.log(korean.test(str)) === true
// 한글만 입력되어 있음

console.log(korean.test(str)) === false
// 한글 외에 문자 입력되어 있음