import { useMutation, gql } from "@apollo/client"


const CREATE_BOARD = gql`       //   이런 형태를 "query문" 이라고 함
                                // # mutation query문을 백틱으로 묶고 앞에 gql을 붙여 
                                   # gql 형태임을 인식하게 함                                
  mutation {                        
      createBoard(writer: "송현섭", title: "제목", contents: "내용임") {
            _id
            number
            message
      }
    }
  `  // 앞에 붙이는 gql => 백틱으로 감싼 mutation이 gql임을 알리는 키워드 




export default function GraphqlMutationPage() {


    const [createBoard] = useMutation(CREATE_BOARD)


    const onClickSubmit = async () => {

       const result = await createBoard()
       console.log(result)
    }
 








     // 한 줄일때는 괄호( ) 필요없음    
     return  <button onClick={onClickSubmit}>GraphqlAPI 요청하기</button>
    
}







