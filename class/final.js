

let timer

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



const buttonClick = () => {


    let random = String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById("number").innerText = random


    document.getElementById("okButton").disabled = false
    


    let time = 10
    let active = false


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
                active = false
            }
            
        
         },1000)

        
    }


}



const complete = () => {

    let name = document.getElementById("tx1").value 


    alert(name + "님 인증이 완료되었습니다")



    document.getElementById("okButton").disabled = true
    document.getElementById("send__button").disabled = true 

    clearInterval(timer)




    document.getElementById("rest__time").innerText = "3:00"
    document.getElementById("number").innerText = "000000"
    
}


 