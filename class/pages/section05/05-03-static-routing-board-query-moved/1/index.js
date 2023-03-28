// 조회되는 게시글의 각 항목

import { useQuery } from "@apollo/client"



const FETCH_BOARD = gql`query {
        
            fetchBoard(number: 1) {
                number
                writer
                title
                contents
            }
        }
        `



export default function StaticRoutingPage() {

    const {data} = useQuery(FETCH_BOARD)


    return (
         <div>
            <div>1번 게시글 이동이 완료되었습니다</div>
            <div>작성자:{data.fetchBoard.writer}</div>
            <div>제목: {data.fetchBoard.title}</div>
            <div>내용: {data.fetchBoard.contents}</div>
         </div>
    )  // 한 줄은 () 입력 필요 X

}