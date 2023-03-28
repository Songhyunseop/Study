import { useMutation, gql } from "@apollo/client"


const CREATE_PRODUCT = gql`   # $로 각각의 타입(type) 지정
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){  
    # $로 표시하면 변수로 지정됨   
      createProduct(seller: $seller, createProductInput: $createProductInput) {     
            _id
            number
            message
      }
    }
    `
   // 앞에 붙이는 gql => 백틱으로 감싼 mutation이 gql임을 알리는 키워드 




export default function GraphqlMutationPage() {


    const [createProduct] = useMutation(CREATE_PRODUCT)


    const onClickSubmit = async () => {

       const result = await createProduct({
// $의 각 변수의 값 지정
        variables: {          //variables = $의 역할을 함 (변할 수 있는 것)
          
          seller: "철수",
          createProductInput: {
            name: "마우스",
            detail: "좋은 마우스",
            price: 2000
          }
        }
       })
       console.log(result)
    }
 




     // 한 줄일때는 괄호( ) 필요없음    
     return  <button onClick={onClickSubmit}>GraphqlAPI 요청하기</button>
    
}



