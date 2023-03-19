
import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"



// [number]은 변수로 이전에 router.push( ) 주소 `/` 끝에 담은 값이 [number] 값이 됨 


const FETCH_PRODUCT = gql `query ($productId:ID) {
  
    fetchProduct(productId: $productId) {
      
      seller
      name
      detail
      price
    }
  }
  `

// 이를 활용해 그 값을 fetchProduct의 productID 의 값에 사용

// (결과적으로 게시물 등록 후 생성된 아이디가 number 값이 되어 이 곳으로 넘어오고,
//  이를 productID에 입력해서 게시물 등록하면 그 게시물 페이지로 이동하는 결과물 완성)




export default function ShowProduct () {

    
    const router = useRouter()

    console.log(router.query.number)


    const {data} = useQuery(FETCH_PRODUCT, {  //FETCH_PRODUCT가 가져오는 조회값들이
        variables:{                           // data 안에 담김
            productId: router.query.number
        }
    })
    
   


    console.log(data)


    return(             // 위의 데이터를 get 할 때 대기시간이 있지만, 기다리지 않고 바로 return 쪽으로
                        // 넘어가기 때문에 data 값은 undefined가 됨 (오류 발생), 이후 값을 받아오고 재할당 되면서 data 값이 생김
        <div>
            <div>상품명: {data && data.fetchProduct.name} </div>
            <div>상품내용: {data?.fetchProduct.detail}</div>
            <div>상품가격: {data ? data.fetchProduct.price : "loading..."} </div>
        </div>  
        )           // 위의 문제를 해결하기 위해 jsx에서 표시될 데이터를 값의 존재유무에 따라 다르게 렌더링하는
                    // 조건부 렌더링을 활용 
}