

import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"



const FETCH_BOARD = gql`query fetchBoard($number: Int){
        
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

    Number(router.query.number) // 페이지 변수값으로 필요한 정보

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
        number: Number(router.query.number) }
    })   // data는 처음에는 없는 값[undefined] (요청 후 응답을 받아서 데이터를 가져와야 data에 그 값이 할당됨)
                                           // 비동기이기 때문에 바로 밑의 return이 동작하고 data가 없을때 data.~~을 불러올 수 없음으로 에러 발생
                                           // 이후 백엔드에서 응답을 받고 data 값이 생기면서 data가 다시 재할당 됨


    const onClickMove = ()=> {

        router.push(`/section09/09-04-boards/${router.query.number}/edit`)
    }

                                           
    return (
         <div>
            <div>2번 게시글 이동이 완료되었습니다</div>
            <div>작성자:{data && data?.fetchBoard?.writer}</div>  //엔드 연산자 (조건부 렌더링)
            <div>제목: {data?.fetchBoard?.title}</div>    // optionalChaining (조건부 렌더링)
            <div>내용: {data ? data?.fetchBoard?.contents : "로딩중입니다"}</div> //삼항 연산자 (조건부 렌더링)
            <button onClick={onClickMove} >수정하러가기</button>
         </div>
    ) 

}