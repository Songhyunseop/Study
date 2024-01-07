

import { useQuery, useMutation ,gql } from "@apollo/client"
import {Box,ChildBox} from "../../../../src/components/unit/product/list-08/Product.styles"


const FETCH_PRODUCTS = gql `query { 
    
    fetchProducts {
      
      _id
      seller
      name
      detail
      price
    }
  }
`



const DELETE_PRODUCT = gql `mutation deleteProduct($productId:ID) {
  
  deleteProduct(productId:$productId) {
    
    _id
    number
    message
  }
}
`







export default function ProductList () {


    const {data} = useQuery(FETCH_PRODUCTS)

    console.log(data?.fetchProducts)



    const [deleteProduct] = useMutation(DELETE_PRODUCT)
     



    const onClickDelete = (event) => {

        console.log(event.target)

        deleteProduct({variables:{
          productId: event.target.id
        },
        refetchQueries: [{query: FETCH_PRODUCTS}]   // query API 재요청 (option) *새로고침*
        })

    }



  
            // react는 key를 설정 안하면 각 항목들을 전체요소로 보고, 전체 UI를 업데이트 함(비효율적)
            // key 값은 각각이 가지는 고유한 값으로 설정하는 것이 좋음 (ex. index 같은 경우 그 자체가 삭제되지 않고, 해당 index 위치에 다음 요소가 옴 (자리번호), 따라서 UI 변동이 바로 안됨)
    return (

        <Box>
           {data?.fetchProducts.map( el => 
                <ChildBox key={el._id} >
                    <input type="checkbox"/>
                    <span>{el._id}</span>
                    <span>{el.seller}</span>
                    <span>{el.name}</span>
                    <span>{el.detail}</span>
                    <span><button onClick={onClickDelete} id={el._id} >삭제</button></span>
                </ChildBox>    
           )}
        
        </Box>
    )




 } 