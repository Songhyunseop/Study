
// 랜덤으로 6자리 숫자가 배정되고, 각 숫자의 색상또한 랜덤으로 적용되는 함수

const link = () => {

    let number = document.getElementsByClassName("number") // 요소'들'을 선택
    let randomNumber = String(Math.floor(Math.random()*1000000)).padStart(6,0)



    for(i=0; i<6; i++) { // for문을 이용해서 앞서 가져온 요소'들' 객체를 하나씩 반환


        let randomColor = Math.floor(Math.random()*1000000)

        number[i].innerText = String(randomNumber)[i]
        number[i].style.color = "#" + randomColor
    }




}