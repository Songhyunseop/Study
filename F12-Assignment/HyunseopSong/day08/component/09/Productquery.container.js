
import ProductPresenter from "./Productquery.presenter"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./Productquery.queries"
import { useRouter } from "next/router" // router는 리액트에서 가져오기 때문에 어느 컴포넌트에서도 사용이 가능하다



export default function ProductContainer (props) {



    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProductInput] = useMutation(UPDATE_PRODUCT)

    const router = useRouter()










    const sellerChange = (event) => {

        setSeller(event.target.value)

    }




    const productChange = (event) => {

        setName(event.target.value)
    }




    const detailChange = (event) => {

        setDetail(event.target.value)
    }




    const priceChange = (event) => {

        setPrice(parseInt(event.target.value))
    }



    const CreateBtn = async() => {     // 게시글 등록 버튼 

 const result = await createProduct({variables:{
            seller,
            createProductInput: {
                name,
                detail,
                price
            }
        }})

        router.push(`/09/${result.data.createProduct._id}`)

    }


    const EditBtn = () => {             // 게시글 수정 버튼

        updateProductInput({variables:{

            productId: props.number,
            updateProductInput: {
                
                name: name,
                detail: detail,
                price: price
            }
        }})

        console.log(props.number)
    
        
    }










    return(
        <>
         <ProductPresenter
          sellerChange={sellerChange}
          productChange={productChange}
          detailChange={detailChange}
          priceChange={priceChange}
          CreateBtn={CreateBtn}
          EditBtn={EditBtn}
          isEdit={props.isEdit}
          />
        </>
    )
}