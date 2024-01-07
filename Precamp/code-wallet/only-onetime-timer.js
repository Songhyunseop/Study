

let active = false  //기본 active = false
let timer


const buttonClick = () => {


    let random = String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById("number").innerText = random
// 랜덤 6자리 번호 생성
    



    let time = 180

    if(active===false) { 
                             // false 상태인 active를 true로 바꿈으로 인해 함수를 재실행해도 active 값은
                             // true로 지정되어 있기에 if()에 걸러지지 않고 else()로 이동

        let active = true  


      timer = setInterval(function () {

            if(time>=0) {
                
                
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2,0)
                time = time-1
        
                document.getElementById("rest__time").innerText =  min + ":" + sec
        
            } else {  // time<0 일 때 else()내의 함수가 1000ms 마다 반복실행

                clearInterval(timer)  // setInterval 함수 자체를 timer라는 변수명에 할당
                active = false        // clearInterval 변수값에 timer를 넣어서 else()로 넘어가는 순간
            }                         // 타이머는 종료됨
            
                                      // active를 false로 바꿔 함수를 재실행하면 다시 if()에 걸러지게 함
         },1000)

        
    }


}