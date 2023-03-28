
// 여기는 등록 페이지

import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container"  // 공통으로 사용되는 컨테이너 컴포넌트


export default function GraphqlMutationPage() {

    // isEdit에 Boolean 값을 상속하여 하위 컴포넌트의 요소를 그 값에 따라 바꾸게 됨
  return(
  <div>
    <div>여기는 페이지입니다</div>
    <BoardWrite isEdit={false}/> 
    <div>여기는 페이지입니다</div>
  </div>
  )
    
}