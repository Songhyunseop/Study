

// 랜덤 6가지 색상, 6자리 번호 생성 



const randomNumber = () => {
    
    const random = String(Math.floor(Math.random()*1000000)).padStart(6,0)

    document.getElementById("number1").innerText = random
}






 const randomIsok = () => {
    
    const colorRandom1 = String(Math.floor(Math.random()*100000)).padStart(6,0)

const colorRandom2 = String(Math.floor(Math.random()*100000)).padStart(6,0)

const colorRandom3 = String(Math.floor(Math.random()*100000)).padStart(6,0)

const colorRandom4 = String(Math.floor(Math.random()*100000)).padStart(6,0)

const colorRandom5 = String(Math.floor(Math.random()*100000)).padStart(6,0)

const colorRandom6 = String(Math.floor(Math.random()*100000)).padStart(6,0)




document.getElementById("color1").style.color = "#" + colorRandom1

document.getElementById("color2").style.color = "#" + colorRandom2 

document.getElementById("color3").style.color = "#" + colorRandom3 

document.getElementById("color4").style.color = "#" + colorRandom4 

document.getElementById("color5").style.color = "#" + colorRandom5 

document.getElementById("color6").style.color = "#" + colorRandom6 
 




const newLine1 = Math.floor(Math.random()*10)

const newLine2 = Math.floor(Math.random()*10)

const newLine3 = Math.floor(Math.random()*10)

const newLine4 = Math.floor(Math.random()*10)

const newLine5 = Math.floor(Math.random()*10)

const newLine6 = Math.floor(Math.random()*10)




document.getElementById("color1").innerText = newLine1

document.getElementById("color2").innerText = newLine2

document.getElementById("color3").innerText = newLine3

document.getElementById("color4").innerText = newLine4

document.getElementById("color5").innerText = newLine5

document.getElementById("color6").innerText = newLine6

}