const next1 = () => {

    let phone1 = document.getElementById("phone1").value
    
    if(phone1.length===3) {
 
     document.getElementById("phone2").focus()
 
    }
 
 } // phone1의 값의 길이가 3이 되면 phone2의 입력 칸으로 이동
 



const next2 = () => {

   let phone2 = document.getElementById("phone2").value
   
   if(phone2.length===4) {

    document.getElementById("phone3").focus()

   }

} // phone2의 값의 길이가 4가 되면 phone3의 입력 칸으로 이동