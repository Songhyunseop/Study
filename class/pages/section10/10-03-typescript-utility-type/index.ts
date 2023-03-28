

export interface IProfile {

    name: string
    age: number
    school: string
    hobby?: string
}






// Utilty  type (객체같이 지정하는 타입을 만들고 약간씩의 변동으로 다른 타입을 만들 때
                // 굳이 매번 반복해서 IProfile을 만들지 않고 아래의 메소드들을 활용)



// 1. Partial 타입
type aaa = Partial<IProfile>  // 모든 타입에 ? 붙음 



// 2. Required 타입
type bbb = Required<IProfile>  // 모든 타입에 ?가 삭제됨 



// 3. Pick 타입
type ccc = Pick<IProfile, "name" |"age"> // name, age만 타입으로 사용



// 4. Omit 타입
type ddd = Omit<IProfile, "school"> // school만 타입에서 제외해서 사용






// 5. Record 타입 (Union 타입을 먼저 이해해야 사용 용이)

type eee = "철수" | "영희" | "훈이"  // Union 타입
let child1: eee // 철수, 영희, 훈이만 가능
let child2: string // 철수, 영희, 사과, ....문자열 다 됨


type fff = Record<eee, IProfile>  // eee는 각각의 key가 되고, IProfile은 그 값이 되어 개별적으로 각각의 타입이 지정됨





// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile  // keyof 메소드로 IProfile의 key만 뽑아옴
let myProfile: ggg //  IProfile의 각 key인 name, age, school, hobby만 가능





// 7. type vs interface 차이
export interface IProfile {   //  => interface는 선언병합(키:타입 을 넣어서 객체 타입하나 더 추가) 가능 
                              // => type은 선언병합이 안됨 (X)
    candy: number
}








//8. 배운 것 응용 (ex. Partial 사용해서 candy 하나만 넣어도 사용가능하게 함)
let profile: Partial<IProfile> = {

    candy : 10,
}