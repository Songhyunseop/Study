// 여기는 수정 페이지

import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container"  // 공통으로 사용되는 컨테이너 컴포넌트
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



export default function GraphqlMutationPage() {

  const router = useRouter()

  console.log(router)

  Number(router.query.number) // 페이지 변수값으로 필요한 정보

  const {data} = useQuery(FETCH_BOARD, {
      variables: {
      number: Number(router.query.number) }
  }) 

  // data 는 처음 실행 시 undefined 일 것이고,
  //두 번째로 받아올 때 값을 받아올 것임




  return(
  <div>
    <div>여기는 페이지입니다</div>
    <BoardWrite isEdit={true} data={data} />
    <div>여기는 페이지입니다</div>
  </div>
  )
    
}