

const link = () => {

    let number = document.getElementsByClassName("number")
    let randomNumber = String(Math.floor(Math.random()*1000000)).padStart(6,0)



    for(i=0; i<6; i++) {


        let randomColor = Math.floor(Math.random()*1000000)

        number[i].innerText = String(randomNumber)[i]
        number[i].style.color = "#" + randomColor
    }




}
