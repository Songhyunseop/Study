

// 글을 올리고 나면 올려진 해당 페이지로 이동 


import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"


const CREATE_BOARD = gql`   # $로 각각의 타입(type) 지정 [안 넣으면 오류남 (표시용)]
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


    const router = useRouter()

    const [createBoard] = useMutation(CREATE_BOARD)


    const onClickSubmit = async () => {

    try {

       const result = await createBoard({

        variables: {         
          writer: "현섭",
          title: "안녕하세요",  
          contents: "반갑습니다"
        }
       })
       console.log(result)  // mutation 함수에 변수로 입력한 값을 포함한 각 데이터가 담김(id, number, message...)
       console.log(result.data.createBoard.number)  // 이 데이터에서 number(게시글 번호)를 꺼내옴 

       router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
       // 경로 끝에 게시글 번호를 변수로 둬서 등록한 게시글로 바로 이동됨

    } catch(error) {

        alert(error.message)
    }


    }
 




     // 한 줄일때는 괄호( ) 필요없음    
     return  <button onClick={onClickSubmit}>GraphqlAPI 요청하기</button>
    
}
