

import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.Presenter"
import {나의그래프큐엘세팅} from "./BoardWrite.queries"

// import akdmflmslfml from "./BoardWrite.presenter"  => 이름 바뀌어도 됨 (default)
// import ddsfsdf, {apple} from "./BoardWrite.presenter"  => export, default export 둘 다 있을 때 둘 다 가져오는 법


// import * as ZZZ from "./BoardWrite.styles" // styles 폴더 안의 emotion에 들어있는 모든 css 속성을 *라는 이름의 객체에 담아서 가져 옴, as를 붙여서 객체의 이름을 ZZZ로 변경
// ZZZ.RedInput
// ZZZ.BlueButton





export default function BoardWrite () {


    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
  
  
  
      const [나의함수] = useMutation(나의그래프큐엘세팅)
  
  
      const onClickSubmit = async () => {
  
         const result = await 나의함수({
  // $의 각 변수의 값 지정
          variables: {          //variables = $의 역할을 함 (변할 수 있는 것)
            writer: writer,
            title: title,
            contents: contents
          }
         })
         console.log(result)
      }
   
  
  
  
  
      function onChangeWriter(event) {
  
        setWriter(event.target.value)
    }
  
  
    function onChangeTitle(event) {
  
      setTitle(event.target.value)
  }
  
  
  function onChangeContents(event) {
  
    setContents(event.target.value)
  }

  


    
    return(
    <div>
        <div>여기는 컨테이너입니다</div>
        <BoardWriteUI aaa={onClickSubmit} 
                      bbb={onChangeWriter}
                      ccc={onChangeTitle}
                      ddd={onChangeContents}
                      />
        <div>여기는 컨테이너입니다</div>
    </div>   
    )
}