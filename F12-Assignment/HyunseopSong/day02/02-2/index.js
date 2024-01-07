
import { useState } from "react";


export default function CountUp () {


    const [btn, setBtn] = useState(0)


    function BtnUp () {

       setBtn(btn+1)
    }




    return (

        <div>
            <div>{btn}</div>
            <button onClick={BtnUp} >카운트 증가</button>
        </div>


    )
}