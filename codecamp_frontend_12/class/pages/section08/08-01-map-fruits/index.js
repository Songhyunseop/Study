
// 컴포넌트 위에 만들어 둔 이유 : 컴포넌트가 리렌더링 되어도 다시 안 만들어짐 (데이터 관리에 효율적)
const FRUITS = [
    { number: 1, title: "레드향" }, // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];


export default function MapFruitsPage() {

    const aaa =[<div>1 레드향</div>,<div>2 샤인머스켓</div>,<div>3 산청딸기</div>]    

    const bbb = FRUITS.map((el) => <div>{el.number} {el.title}</div>)
    


    return(
        <div>
            <div>{aaa}</div> // 1. 기본적인 예제

            <div>{bbb}</div>  // 2. 실무 백엔드 데이터 예제 = 변수에 담아서 보이기에, 정확히 뭘 나타내고자 하는지 명확하지 않음

            <div>
                // 3. 실무 효율적이 렌더링 예제 
                {FRUITS.map((el) => <div>{el.number} {el.title}</div>)} //직관적으로 코드 자체를 보여서, 나타내고자 하는 걸 확실히 알 수 있음 ()
            
            </div>
        </div>
    )
}