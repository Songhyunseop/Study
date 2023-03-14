
import { useState } from "react";




export default function ChangeButton () {


    const [btn, btnText] = useState("반갑습니다")


    function BtnClick () {
        document.getElementById("hello").innerText = btn

    }






    return(
        <div>
            <button onClick={BtnClick} id="hello">안녕하세요</button>
        </div>

    )
}