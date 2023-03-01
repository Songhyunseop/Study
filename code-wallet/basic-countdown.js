


// 각각의 입력값(매개변수)을 기본 "date-mon-day" 형식으로 만들고 변수에 할당 

const countDown =()=> {


    let year = document.getElementById("year").value
    let month = document.getElementById("month").value
    let day = document.getElementById("day").value

    let targetDate = `${year}-${month}-${day}`



    

//1초마다 반복되는 setInterval 함수에 모두 입력

 let count =   setInterval(function() {

        let today = new Date()  // new Date()는 현 시간을 기준으로 함으로 함수가 실행될때마다 1초씩 줄어드는 값을 가짐
        let target = new Date(targetDate)

        let remaining = target - today // 위 과정으로 인해 remaining도 값이 매초마다 1씩 줄어들게 됨

        let divideBysec = remaining / 1000 // 1000으로 나눠서 ms단위를 sec단위로 바꿔줌 
     
    
        let days = Math.floor(divideBysec / 86400) // 86400 = 1Day를 초단위로 바꾼 것, 이를 나눈 몫이 남은 Days가 됨
        let hours = Math.floor(divideBysec / 3600) % 24 // 3600 = 1hour, 나눈 몫은 남은 총 시간, 이를 다시 24로 나눈 나머지값은 24시 단위 기준으로 남은 시간
        let min = Math.floor(divideBysec / 60) % 60 // 60 = 1min, 나눈 몫은 남은 총 분, 이를 60씩 나눈 나머지는 60분 단위 기준으로 남은 분  
        let sec = Math.floor(divideBysec) % 60 // 기본 값이 초단위(sec)이기에 60초씩 나눈 나머지 값이 곧 남아있는 초(sec)가 됨
    
    
        
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

            clearInterval(count) // 잘못된 값을 입력해서 작동이 안해야하기에 함수를 종료시켜 줌

        } else {

            document.getElementById("stat").innerText = ""
            document.getElementById("stat").style.color = "black"

        }
        

    
    }, 1000)


   
} 