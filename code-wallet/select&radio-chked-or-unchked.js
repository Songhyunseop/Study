


let selectBox = document.getElementById("selectBox").value  //<select> 태그의 value값을 할당 후
                                                            //selected 되어있는 <option>의 value값에 ""를 줌
    

if(selectBox==="") {    // ""이라면 기본적으로 selected된 <option>이 표시되어 있는 상태이므로 [체크]가 안 된 것임

    document.getElementById("select__wrong").innerText = "지역을 선택해주세요"
    
} else {

    document.getElementById("select__wrong").innerText = ""
}



let female = document.getElementById("female").checked   // .checked는 [체크]가 되어있는 상태   
let male = document.getElementById("male").checked 


if(female===false && male===false) {   // 변수로 할당한 checked 값이 둘 다 false라면 둘 다 [체크]가 안 된 상태

                                       // 따라서 <input type="radio">의 어느 항목도 [체크]하지 않은 상태

    document.getElementById("mf__wrong").innerText = "성별을 선택해주세요"

} else if(female===true || male===true) {   // 둘 중 하나라도 checked 라면 둘 중 하나가 선택된 것임

    document.getElementById("mf__wrong").innerText = ""
}