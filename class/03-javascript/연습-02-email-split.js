const email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
let user = email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
user
// 'codecamp'
company
// 'gmail.com'
let maskingmail = []
// undefined
maskingmail.push(user[0])
// 1
maskingmail.push(user[1])
// 2
maskingmail.push(user[2])
// 3
maskingmail.push(user[3])
// 4
maskingmail
// (4) ['c', 'o', 'd', 'e']
maskingmail.push("*")
// 5
maskingmail.push("*")
// 6
maskingmail.push("*")
// 7
maskingmail.push("*")
// 8
maskingmail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingmail.join("")
// 'code****'
maskingmail.join("") + "@" + company
// 'code****@gmail.com'
let result = maskingmail.join("") + "@" + company
// undefined
result
// 'code****@gmail.com'