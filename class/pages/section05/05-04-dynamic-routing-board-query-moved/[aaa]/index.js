// 조회되는 게시글의 각 항목

import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"



const FETCH_BOARD = gql`query fetchBoard($number: Int){  # query 문
        
            fetchBoard(number: $number) {
                number
                writer
                title
                contents
            }
        }
        `



export default function StaticRoutingPage() {


    const router = useRouter()

    console.log(router)
                                        // useMutation과 달리 useQuery는 data를 입력해 내부 데이터를 받아옴
                                        // useQuery()가 할당된 data의 내부 정보를 이용하기 때문에 여기서 변수 설정
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
        number: Number(router.query.aaa) }
    })   // data는 처음에는 없는 값[undefined] (요청 후 응답을 받아서 데이터를 가져와야 data에 그 값이 할당됨)
                                           // 비동기이기 때문에 바로 밑의 return이 동작하고 data가 없을때 data.~~을 불러올 수 없음으로 에러 발생
                                           // 이후 백엔드에서 응답을 받고 data 값이 생기면서 data가 다시 재할당 됨
    return (
         <div>
            <div>2번 게시글 이동이 완료되었습니다</div>
            <div>작성자:{data && data.fetchBoard?.writer}</div>  //엔드 연산자 (조건부 렌더링)
            <div>제목: {data?.fetchBoard?.title}</div>    // optionalChaining (조건부 렌더링)
            <div>내용: {data ? data.fetchBoard?.contents : "로딩중입니다"}</div> //삼항 연산자 (조건부 렌더링)
         </div>
    ) 

}




