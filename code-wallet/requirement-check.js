const signClick = () => {

    let tx1 = document.getElementById("tx1").value
    let tx2 = document.getElementById("tx2").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    
    if(tx1==="") {  // tx1의 공백여부 체크

        document.getElementById("wrong1").innerText = "이메일을 입력해주세요" 
        
    } else if(tx1.includes("@")===false) { // tx1의 "@" 유무 체크

        document.getElementById("wrong1").innerText = "이메일이 올바르지 않습니다"
    } else {

        document.getElementById("wrong1").innerText = ""
    }





    let korean = /^[가-힣]*$/  // korean 변수명에 한글 표현식 할당



    if(tx2==="") {  // tx2의 공백유무 체크

        document.getElementById("wrong2").innerText = "이름을 입력해주세요"
    
    } else if(korean.test(tx2)===false) {  // 한글 할당한 korean을 이용해 tx2의 value값에 한글 외에 문자 있는지 체크

        document.getElementById("wrong2").innerText = "이름이 올바르지 않습니다"
    
    } else {

        document.getElementById("wrong2").innerText = ""
    } 




    if(pw1==="") {  // pw1의 공백 체크

        document.getElementById("wrong3").innerText = "비밀번호를 입력해주세요"
    
    } else {

        document.getElementById("wrong3").innerText = ""
    
    } 




    if(pw2==="") {  // pw2의 공백 체크

        document.getElementById("wrong4").innerText = "비밀번호를 입력해주세요"
    
    } else {

        document.getElementById("wrong4").innerText = ""
    }




    if(pw1!=="" && pw2!=="" && pw1!==pw2) {  // pw1, pw2가 공백이 아니면서 비밀번호가 서로 다른지 체크

        document.getElementById("wrong3").innerText = "비밀번호가 다릅니다"
        document.getElementById("wrong4").innerText = "비밀번호가 다릅니다"
    
    } else if(pw1!=="" && pw2!=="" && pw1===pw2) {

        document.getElementById("wrong3").innerText = ""
        document.getElementById("wrong4").innerText = ""
    }

}