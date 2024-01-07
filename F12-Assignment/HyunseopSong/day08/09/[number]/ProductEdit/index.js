
import { useRouter } from "next/router"
import ProductContainer from "../../../../src/components/unit/product/09/Productquery.container"


export default function UpdateProduct () {

    const router = useRouter()

    console.log(router.query.number)

    return(
        <>
         <ProductContainer isEdit={true}
                           number={router.query.number}/>
        </>
    )
}