import { useMutation, gql } from "@apollo/client"


const 나의그래프큐엘세팅 = gql`   # $로 각각의 타입(type) 지정 [안 넣으면 오류남 (표시용)]
  mutation createBoard($writer: String, $title: String, $contents: String) {  
    # $로 표시하면 변수로 지정됨   
      createBoard(writer: $writer, title: $title, contents: $contents) {     
            _id
            number
            message
      }
    }
    `
   // 앞에 붙이는 gql => 백틱으로 감싼 mutation이 gql임을 알리는 키워드 




export default function GraphqlMutationPage() {


    const [나의함수] = useMutation(나의그래프큐엘세팅)


    const onClickSubmit = async () => {

       const result = await 나의함수({
// $의 각 변수의 값 지정
        variables: {          //variables = $의 역할을 함 (변할 수 있는 것)
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다"
        }
       })
       console.log(result)
    }
 




     // 한 줄일때는 괄호( ) 필요없음    
     return  <button onClick={onClickSubmit}>GraphqlAPI 요청하기</button>
    
}