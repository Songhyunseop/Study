

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";


const CREATE_PRODUCT = gql`mutation createProduct($seller:String, $createProductInput:CreateProductInput!) {
  
    createProduct(seller: $seller, createProductInput: $createProductInput){
      
      _id
      number
      message
    }
  }
`




export default function Product () {


    const [createProduct] = useMutation(CREATE_PRODUCT)



    const [seller, setSeller] = useState("")
    const [product, setProduct] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")





    const SellerChange = (event) => {

        setSeller(event.target.value)

    }


    const ProductChange = (event) => {

        setProduct(event.target.value)
        
    }



    const DetailChange = (event) => {
        
        setDetail(event.target.value)

    }



    const PriceChange = (event) => {
        
        setPrice(parseInt(event.target.value))  //prcie를 parseInt로 감싸서 해결 (블로그 기술할 것!)

    }



    const onClickCreate = () => {
        
        createProduct({variables: {
            seller: seller,
            createProductInput:{
                name: product,
                detail: detail,
                price: price
            
            }
        }})

    }





    return (

        <div>
        판매자: <input type="text" onChange={SellerChange} />
        상품명: <input type="text" onChange={ProductChange} />
        세부정보: <input type="text" onChange={DetailChange} />
        가격: <input type="number" onChange={PriceChange} />
        <button onClick={onClickCreate} >GRAPHQL-API 요청하기</button>
    </div>
    )
}
