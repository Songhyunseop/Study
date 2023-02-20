


let blank = []


const randomPlay=() => {



for(i=0;i>6;i++) {


    blank.push(String(Math.floor(Math.random()*1000000)))


    
}

  document.getElementById("color1").innerText = blank[0]

 }