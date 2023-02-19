let isStarted = false 

const timer = () => {

  if (isStarted===false) {
    //타이머가 작동중이 아닐 때
    isStarted=true
    document.getElementById("ok").disabled = false

    let time = 180
    let timeEnd

   timeEnd = setInterval(function hello() {
       if(time>=0) {
         let min = Math.floor(time / 60)
         let sec = String(time % 60).padStart(2,0)
         time = time - 1
         document.getElementById("count").innerText = min + ":" + sec
     } else {
         document.getElementById("ok").disabled = true
         isStarted = false
         clearInterval(timeEnd)
     }
  },1000)

  } else {
    //타이머가 작동중일 때

  }
  
  

}

