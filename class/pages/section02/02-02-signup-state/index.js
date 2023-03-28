

import { useState } from "react"


export default function SignupStatePage() {


 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const [emailError, setEmailError] = useState("")
 const [passwordError, setPasswordError] = useState("")




    function onChangeEmail(event) {

        setEmail(event.target.value)
    }



    function onChangePassword(event) {

        setPassword(event.target.value)
    }



    function onClickSignup() {

        alert("회원가입을 축하합니다!!")

        // 1. 검증하기 (올바른 입력인지)

        if(email.includes("@")===false) {

            // alert("이메일이 올바르지 않습니다, @가 없음")
            // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다, @가 없음"
            setEmailError("이메일이 올바르지 않습니다, @가 없음")

            

        } else {

        



        // 2. 백엔드 컴퓨터에 보내주기 (백엔드가 만든 함수, API)

        // 3. 성공 알람 보여주기

        }
    }





    return(

        <div>
            이메일: <input type="text" onChange={onChangeEmail}/>  //onChange = 특정 변경사항을 감지 
            {/* <div id="myerror"></div> */} = HTML방식 
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}