

const myShopping = [
    { category: "과일", price: 12000},
    { category: "의류", price:10000},
    { category: "의류", price: 20000},
    { category: "장난감", price: 9000},
    { category: "과일", price: 5000},
    { category: "의류", price: 10000},
    { category: "과일", price: 8000},
    { category: "의류", price: 7000},
    { category: "장난감", price: 5000},
    { category: "의류", price: 10000},
]



function Shop () {

let count = 0
let priceSum = 0

for(let i=0; i<myShopping.length; i++) {

if(myShopping[i].category==="의류") {
  
  count = count+1
  priceSum = priceSum + myShopping[i].price
}
}

let message = `의류를 구매한 횟수는 총 ${count}회 금액은 ${priceSum}원 이며 등급은`
let grade

if (count<=2) {

  grade = "Bronze"
  return message + `${grade}입니다`

} else if (count<=4) {

  grade = "Silver"
  return message + `${grade}입니다`

} else {

  grade = "Gold"
  return message + `${grade}입니다`
}

}




