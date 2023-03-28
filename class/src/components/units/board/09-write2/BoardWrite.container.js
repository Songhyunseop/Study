

import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.Presenter"
import {나의그래프큐엘세팅, UPDATE_BOARD} from "./BoardWrite.queries"

// import akdmflmslfml from "./BoardWrite.presenter"  => 이름 바뀌어도 됨 (default)
// import ddsfsdf, {apple} from "./BoardWrite.presenter"  => export, default export 둘 다 있을 때 둘 다 가져오는 법


// import * as ZZZ from "./BoardWrite.styles" // styles 폴더 안의 emotion에 들어있는 모든 css 속성을 *라는 이름의 객체에 담아서 가져 옴, as를 붙여서 객체의 이름을 ZZZ로 변경
// ZZZ.RedInput
// ZZZ.BlueButton





export default function BoardWrite (props) {

    const router = useRouter()
    
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
  
  
  
      const [나의함수] = useMutation(나의그래프큐엘세팅)
      const [updateBoard] = useMutation(UPDATE_BOARD)
  
  
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
         router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
      }
   
  



      const onClickUpdate = async () => {
        // 수정하기 mutation 작성해야 함

 
          const myVariables = {}   // if문 작성으로 입력되는 값만 수정되어 업데이트 될 수 있음 (공백으로 남기는 것은 전송 안됨))
                                   // 즉 myvVariables 객체가 원래 variables 객체를 대신하는 꼴이 되고, 이 안에 조건을 성립하는 값만 담겨서 변수로 입력되어 전송되는 것!
          myVariables.number = Number(router.query.number)
          
          
          if(writer) {
            myVariables.writer = writer
          } 

          if(title) {
            myVariables.title = title
          }

          if(contents) {
            myVariables.contents = contents

          }

    const result = await updateBoard({
    
      variables: myVariables
    
    })



        console.log(result)
        router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)  // router는 리액트에서 제공 되기에 같은 컴포넌트로 경로 공유가 되고 있다면,
      }                                                                                // 어차피 app.js로 최종적으로 합해지기 때문에 어떤 컴포넌트에서도 router 사용 가능



  
  
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
        <BoardWriteUI onClickSubmit={onClickSubmit} 
                      onClickUpdate={onClickUpdate}
                      onChangeWriter={onChangeWriter}
                      onChangeTitle={onChangeTitle}
                      onChangeContents={onChangeContents}
                      isEdit={props.isEdit}
                      data={props.data}
                      />
        <div>여기는 컨테이너입니다</div>
    </div>   
    )
}