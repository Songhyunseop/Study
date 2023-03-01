

const countDown =()=> {


    let year = document.getElementById("year").value
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value

    let targetDate = `${year}-${month}-${day}`



    


 let count =   setInterval(function() {

        let today = new Date()
        let target = new Date(targetDate)

        let remaining = target - today

        let divideBysec = remaining / 1000
     
    
        let days = Math.floor(divideBysec / 86400)
        let hours = Math.floor(divideBysec / 3600) % 24
        let min = Math.floor(divideBysec / 60) % 60 
        let sec = Math.floor(divideBysec) % 60
    
    
        
        document.getElementById("text__day").innerText = days
        document.getElementById("text__hours").innerText = hours
        document.getElementById("text__min").innerText = min
        document.getElementById("text__sec").innerText = sec





        if(remaining<0 === true) {

            document.getElementById("stat").innerText = "이미 지난 날짜입니다"
            document.getElementById("stat").style.color = "red"


            document.getElementById("text__day").innerText = "0"
            document.getElementById("text__hours").innerText = "0"
            document.getElementById("text__min").innerText = "0"
            document.getElementById("text__sec").innerText = "0"

            clearInterval(count)

        } else {

            document.getElementById("stat").innerText = ""
            document.getElementById("stat").style.color = "black"

        }
        

    
    }, 1000)


   
} 