// class Date {
//   qqq = 3; // 변수 선언시 const, let 안 붙임

//   getFullYear() {
//     // 함수 => function 안 붙임
//   }

//   getMonth() {
//     // 함수 => function 안 붙임
//   }
// }

// const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
//
//
//
//
//

// class 안의 것들은 객체 형태를 띄고 있음
// class 에 변수, 함수를 담음
class Monster {
  power = 50;

  attack() {
    console.log("공격합니다!");
  }
}
//
//                  // extends => Monster class 안의 것들을 상속받음
class superMonster extends Monster {
  run() {
    console.log("도망가자!");
  }

  attack() {
    console.log("슈퍼몬스터 필살기!"); // 오버라이딩 (동일한 key인 attack이 중복될 경우 제일 마지막 것으로 덮어씌워지는 것)
  }
}
//
//
// 담은 클래스를 다른 변수에 저장하고 아래와 같이 꺼내서 사용
const monster = new Monster();

monster.power; // 50

monster.attack; // "공격합니다!"

//
//
//

const myMonster = new superMonster();

myMonster.power; // 50
myMonster.attack; // "공격합니다!"
myMonster.run(); // "도망가자!"
