
import { FETCH_PRODUCT } from "../../../src/components/unit/product/09/Productquery.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

export default function FetchProduct () {


const router = useRouter()



    const {data} = useQuery(FETCH_PRODUCT,{variables:{

        productId : router.query.number
    }})
    
    
    

    const onClickEdit = ()=> {

        router.push(`/09/${router.query.number}/ProductEdit`)
    }





    return(
        <>
         <div>상품등록이 완료되었습니다</div>
         판매자: <span>{data?.fetchProduct?.seller}</span>
         상품명: <span>{data?.fetchProduct?.name}</span>
         세부정보: <span>{data?.fetchProduct?.detail}</span>
         가격: <span>{data?.fetchProduct?.price}</span>
         <button onClick={onClickEdit} >수정하기</button>
        </>
    )
}