
import { useMutation, gql } from "@apollo/client" 
import { useRouter } from "next/router"
import { useState } from "react"


    //mutation 앞에 createProduct() 입력, ()안에는 $를 붙인 key와 입력될 value의 타입을 지정 = [작성 안하면 오류남]
const CREATE_PRODUCT = gql `mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
  
    createProduct(seller: $seller, createProductInput: $createProductInput) {
                       #// #입력되는 값(value) 부분을 $로 작성해줌
      _id
      number
      message
    }
  }
  `



export default function AddProduct () {

    
    const router = useRouter()  

    const [createProduct] = useMutation(CREATE_PRODUCT)  // useMutation 함수에 gql 담음
    

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")




    const ChangeSeller = (event) => {

        setSeller(event.target.value)
        console.log(event)
    }


    const ChangeName = (event) => {

        setName(event.target.value)
    }


    const ChangeDetail = (event) => {

        setDetail(event.target.value)
    }


    const ChangePrice = (event) => {

        setPrice(parseInt(event.target.value))
    }






    const ClickProduct = async () => {
                                        // 버튼 클릭 시 지정한 데이터가 createProduct 함수로 인해 전송됨 (정보 등록됨)

     try { // try ~~ catch (성공 or 실패)    


      const result = await createProduct({variables: {
            seller: seller,                           // createProduct() 의 () 안에 variables 객체 입력
            createProductInput: {                     // 객체 안에는 각각의 key의 value를 뭐로 할지 지정 가능
                name: name,
                detail: detail,
                price: price
            }
        }})

        console.log(result.data.createProduct._id) // 보낸 데이터의 객체정보 내의 id값을 찾음
        
        router.push(`/05/products-detail/${result.data.createProduct._id}`) //해당 id를 주소 뒤 값으로 사용

        // 라우터 경로 작성 주의 (폴더경로를 쓰는 것, 주소 아님(X))


    } catch(error) {

        alert(error.message)
  
     } 

}


    return(

        <div>
           판매자: <input type="text" onChange={ChangeSeller} /><br /><br />
           상품명: <input type="text" onChange={ChangeName} /><br /><br />
           상품내용: <input type="text" onChange={ChangeDetail} /><br /><br />
           상품가격: <input type="number" onChange={ChangePrice} /><br /><br />
           <button onClick={ClickProduct} >상품등록</button>
        </div>
    )
}