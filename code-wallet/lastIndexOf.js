
// 각 매개변수 길이 중 최대값 return, 
// 최대값 2개일 경우 마지막 순서 우선으로 return하는 함수 

function whatIslong(str1,str2,str3) {
    
    let str = [str1,str2,str3]
    let long = [str1.length, str2.length, str3.length]
    
    let calc = long.lastIndexOf(Math.max(long[0],long[1],long[2]))

    return str[calc]
}