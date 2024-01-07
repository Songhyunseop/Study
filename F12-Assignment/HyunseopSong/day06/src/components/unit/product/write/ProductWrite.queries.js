


import { gql } from "@apollo/client" 



    //mutation 앞에 createProduct() 입력, ()안에는 $를 붙인 key와 입력될 value의 타입을 지정 = [작성 안하면 오류남]
export const CREATE_PRODUCT = gql `mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
  
    createProduct(seller: $seller, createProductInput: $createProductInput) {
                       #// #입력되는 값(value) 부분을 $로 작성해줌
      _id
      number
      message
    }
  }
  `