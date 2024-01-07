
import { useState } from "react";


export default function ChkNum () {

    const [num, setNum] = useState("000000")

    
    function ChangeNum () {

      setNum(String(Math.floor(Math.random()*1000000)).padStart(6,0))
    }




    return(

        <div>
          <div>{num}</div>
          <button onClick={ChangeNum}>인증번호 전송</button>
        </div>
    )
}