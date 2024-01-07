

import {useState} from "react"  // useState 기능을 react에서 가져옴
                                // useState를 import로 가져와야 사용할 수 있음


export default function CounterStatePage() {
//let count = 0 // let 선언은 리액트 HTML에서 변경을 감지 못함 (사용 불가능)
    const [count, setCount] = useState(0)


    function onClickCountUp () {

       setCount(count + 1)
     }
 
 
 
     function onClickCountDown () {
        
        setCount(count - 1)
     }


    return(

      <div>
        <div>{count}</div>
        <button onClick={onClickCountUp} >카운트 올리기!!</button>
        <button onClick={onClickCountDown} >카운트 내리기!!</button>
      </div>  

    )

}