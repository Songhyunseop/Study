// 여기는 수정 페이지

import BoardWrite from "../../../../../src/components/units/board/09-write/BoardWrite.container"  // 공통으로 사용되는 컨테이너 컴포넌트


export default function GraphqlMutationPage() {


  return(
  <div>
    <div>여기는 페이지입니다</div>
    <BoardWrite isEdit={true}/>
    <div>여기는 페이지입니다</div>
  </div>
  )
    
}