


const login = () => {
    
    let tx1 = document.getElementById("tx1").value
let tx2 = document.getElementById("tx2").value
let pw1 = document.getElementById("pw1").value
let pw2 = document.getElementById("pw1").value
let phone1 = document.getElementById("phone1").value
let phone2 = document.getElementById("phone2").value
let phone3 = document.getElementById("phone3").value


    if(tx1!==""&&tx2!==""&&pw1!==""&&pw2!==""&&phone1!==""&&phone2!==""&&phone3!=="") {

        document.getElementById("send__button").disabled = false
    
    } else {

        document.getElementById("send__button").disabled = true
    }



}



const next1 = () => {

    let phone1 = document.getElementById("phone1").value
    
    if(phone1.length===3) {
 
     document.getElementById("phone2").focus()
 
    }
 
 }
 



const next2 = () => {

   let phone2 = document.getElementById("phone2").value
   
   if(phone2.length===4) {

    document.getElementById("phone3").focus()

   }

}

let active = false
let timer


const buttonClick = () => {


    let random = String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById("number").innerText = random


    document.getElementById("okButton").disabled = false
    


    let time = 180

    if(active===false) {

        let active = true
        document.getElementById("send__button").disabled = true

   timer = setInterval(function () {

            if(time>=0) {
                
                
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2,0)
                time = time-1
        
                document.getElementById("rest__time").innerText =  min + ":" + sec
        
            } else {

                document.getElementById("send__button").disabled = false
                document.getElementById("rest__time").innerText = "3:00"
                document.getElementById("number").innerText = "000000"
                document.getElementById("okButton").disabled = true
                clearInterval(timer)
                active = false
            }
            
        
         },1000)

        
    }


}



const complete = () => {

    let name = document.getElementById("tx2").value 


    alert(name + "님 인증이 완료되었습니다")



    document.getElementById("okButton").disabled = true
    document.getElementById("send__button").disabled = true 

    clearInterval(timer)




    document.getElementById("rest__time").innerText = "인증완료됨"
    document.getElementById("number").innerText = "000000"
    
}







const signClick = () => {

    let tx1 = document.getElementById("tx1").value
    let tx2 = document.getElementById("tx2").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    
    if(tx1==="") {

        document.getElementById("wrong1").innerText = "이메일을 입력해주세요" 
        
    } else if(tx1.includes("@")===false) {

        document.getElementById("wrong1").innerText = "이메일이 올바르지 않습니다"
    } else {

        document.getElementById("wrong1").innerText = ""
    }





    let korean = /^[가-힣]*$/



    if(tx2==="") {

        document.getElementById("wrong2").innerText = "이름을 입력해주세요"
    
    } else if(korean.test(tx2)===false) {

        document.getElementById("wrong2").innerText = "이름이 올바르지 않습니다"
    
    } else {

        document.getElementById("wrong2").innerText = ""
    } 




    if(pw1==="") {

        document.getElementById("wrong3").innerText = "비밀번호를 입력해주세요"
    
    } else {

        document.getElementById("wrong3").innerText = ""
    
    } 




    if(pw2==="") {

        document.getElementById("wrong4").innerText = "비밀번호를 입력해주세요"
    
    } else {

        document.getElementById("wrong4").innerText = ""
    }




    if(pw1!=="" && pw2!=="" && pw1!==pw2) {

        document.getElementById("wrong3").innerText = "비밀번호가 다릅니다"
        document.getElementById("wrong4").innerText = "비밀번호가 다릅니다"
    
    } else if(pw1!=="" && pw2!=="" && pw1===pw2) {

        document.getElementById("wrong3").innerText = ""
        document.getElementById("wrong4").innerText = ""
    }



    
    let selectBox = document.getElementById("selectBox").value

    
    if(selectBox==="") {

        document.getElementById("select__wrong").innerText = "지역을 선택해주세요"
        
    } else {

        document.getElementById("select__wrong").innerText = ""
    }





    let female = document.getElementById("female").checked
    let male = document.getElementById("male").checked 

    
    if(female===false && male===false) {

        document.getElementById("mf__wrong").innerText = "성별을 선택해주세요"
    
    } else if(female===true || male===true) {

        document.getElementById("mf__wrong").innerText = ""
    }




    if(tx1==="") {

    } else if(tx1.includes("@")===false) {

    } else if(tx2==="") {

    } else if(korean.test(tx2)===false) {

    } else if(pw1==="") {

    } else if(pw2==="") {

    } else if(pw1!==pw2) {

    } else if(selectBox==="") {

    } else if(female===false && male===false) {

    } else {

        alert("코드캠프 가입을 축하드립니다!")

        window.location.href = "http://127.0.0.1:5500/cyworld/index.html"
    }

}