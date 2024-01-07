

// 앞서 if문들을 이용해 각 체크항목을 개별적으로 걸러냈기에 마지막으로 [가입하기] 버튼을 누를 때
// 최종적으로 모든 항목을 재검토하고 이상 없을 시 정상 동작할 필요가 있음



// 이미 if문들을 이용해 조건에 따른 실행 로직을 설정해 두었기에 여기서는 조건만 쓰고 나머지는 SKIP

if(tx1==="") {

} else if(tx1.includes("@")===false) {

} else if(tx2==="") {

} else if(korean.test(tx2)===false) {

} else if(pw1==="") {

} else if(pw2==="") {

} else if(pw1!==pw2) {

} else if(selectBox==="") {

} else if(female===false && male===false) {

} else {                            //최종적으로 이상 없을 시 실행할 로직만 else()에 작성

    alert("코드캠프 가입을 축하드립니다!")

    window.location.href = "http://127.0.0.1:5500/cyworld/index.html"

    //window.location.href로 버튼을 누른 후 지정한 다른 페이지로 바로 이동되게 함
}