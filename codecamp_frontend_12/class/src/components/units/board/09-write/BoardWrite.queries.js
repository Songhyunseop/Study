

import { gql } from "@apollo/client"


// 함수형 function(컴포넌트)가 아님으로 export만 작성
export const 나의그래프큐엘세팅 = gql`   # $로 각각의 타입(type) 지정
  mutation createBoard($writer: String, $title: String, $contents: String) {  
    # $로 표시하면 변수로 지정됨   
      createBoard(writer: $writer, title: $title, contents: $contents) {     
            _id
            number
            message
      }
    }
    `




export const UPDATE_BOARD = gql`   # $로 각각의 타입(type) 지정
  mutation updateBoard($number:Int, $writer: String, $title: String, $contents: String) {  
    # $로 표시하면 변수로 지정됨   
      updateBoard(number:$number, writer: $writer, title: $title, contents: $contents) {     
            _id
            number
            message
      }
    }
    `