

//문제 설명
//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

//제한 사항
//n은 0 이상 3000이하인 정수입니다.




function solution(n) {
    
    const answer = new Array(n)
                 .fill(1) // 숫자 1로 전체 배열을 채움
                 .reduce((acc, cur,index) => {
                     const num = cur + index   // 1로 고정된 현재값 + index값을 더해 숫                                                  자 범위를 표현
                     
                     if (n % num === 0) {
                         
                         acc += num
                     }
                     return acc
                 }, 0)
        
       return answer
  }