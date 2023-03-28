
// 객체의 키 & 값 추가
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}


student.school = school


//delete obj.~ 은 실무에서 잘 사용되지 않음 (데이터 손실의 위험성)