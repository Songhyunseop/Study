

export default function TypescriptPage () {

    // typescript는 타입추론을 함 (처음 값을 넣었을 때 그 값을 기준으로 변수 Type을 추측) 
    // 변수 설정, 할당 후 변수이름에 커서 올리면 추론되는 타입을 알려 줌





    // [타입 추론]
    let aaa = "안녕하세요"
    aaa = 3




    // [타입 명시] Type을 명확히 명시함 
    let bbb: string = "반갑습니다"
    bbb = 10



    // [타입 명시가 필요한 상황] string, number 다 가능하게 함 (ex. ccc의 금액단위를 원으로 하고싶을 때)
    let  ccc: string | number = 1000
    ccc = "1000원"
    


    // [숫자 타입]
    let ddd: number = 10
    ddd = "철수"




    // [Boolean 타입]
    let eee: boolean = true
    eee = false
    eee ="false"   // js 에서는 true로 작동함(type 혼용으로 오류 발생 가능)






    // [배열 타입]
    let fff: number[] = [1,2,3,4,5] // 배열 타입임을 명시
    let ggg: string[] = ["철수", "영희", "훈이"]
    let hhh = ["철수", "영희", "훈이", 10] //타입추론으로 어떤 타입을 사용하는지 알아보기 







    // [객체 타입]

    interface IProfile {   // 객체의 [타입 명시]

        name: string
        age: number | string
        school: string
        hobby?: string // 객체 만든 후 나중에 추가될 key의 타입을 미리 지정해 줘야 key 추가 가능
    }                  // hobby에 ?를 붙임 => (hobby는 있어도, 없어도 되는 값이라는 의미)

                       // typescript 에서는 객체의 타입이 지정되어 있으면, 변수 선언 및 할당에서도 hobby가 들어가야 하는데,
                       // 이를 ?를 통해 나중에 hobby를 추가하는 게 가능하도록 해줌


    const profile: IProfile = {

        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }


    profile.name = "훈이" // 타입추론으로는 이것만 가능 (존재하는 key에 알맞은 타입으로 값을 변경)
    profile.age = "8살"
    profile.hooby = "수영"  // typescript는 객체의 key가 어떤 게 있는지까지 검증해 줌(key 추가 안됨!)







    // [any 타입]     => 가급적 사용하면 안되는 타입 (js와 동일함: 모든 타입 할당 가능)
    let qqq: any = "철수"
    qqq = 123
    qqq = true

















    // [함수 타입]  => 1.각 매개변수의 타입은 암묵적으로 any(아무거나 가능)타입으로 지정됨 [타입추론 불가능 X]
    function add(num1: number, num2: number, unit: string): string {
// 2. 따라서 각 매개변수의 타입을 직접 명시해줘야 함 [타입 명시]          // 3. 함수가 return 하는 값의 타입을 지정(string)
    
        return num1 + num2 + unit
    }

    const result = add(1000,3000,"원")






    // [화살표 함수]
    const add2 = (num1: number, num2: number, unit: string): string => {

            
                return num1 + num2 + unit
            }
        
            const result2 = add(1000,3000,"원")




    return <></>
}