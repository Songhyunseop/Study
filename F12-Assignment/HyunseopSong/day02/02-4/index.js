
import { useState } from "react";
import { TextColor } from "../../styles/emotion"


export default function func () {

    const [id, setId] = useState("")
     const [pw, setPw] = useState("")
     const [pwChk, setPwChk] = useState("")

     const [msg, setMsg] = useState("")
     const [msg2, setMsg2] = useState("")




    

    function idChange (event) {

        setId(event.target.value)
    }


    function pwChange (event) {

        setPw(event.target.value)
    }


    function reCheckChange (event) {

        setPwChk(event.target.value)
    }



    function signUp () {

        if(id.includes("@")===false) {

            setMsg("이메일 잘못입력하셨습니다")

        } else {
            setMsg("")
        }


        if(!pw && !pwChk) {

            setMsg2("비밀번호가 일치하지 않습니다")

        } else {

            setMsg2("")
        }


        if(pw!==pwChk) {

            setMsg2("비밀번호가 일치하지 않습니다")

        } else {

            setMsg2("")
        }


    }


    return (

        <div>
           <input onChange={idChange} type="text" /><br />
           <TextColor>{msg}</TextColor>
           <input onChange={pwChange} type="password" /><br />
           <TextColor>{msg2}</TextColor>
           <input onChange={reCheckChange} type="password" /><br />
           <TextColor>{msg2}</TextColor>
           <button onClick={signUp}>가입하기</button>

        </div>
    )
}