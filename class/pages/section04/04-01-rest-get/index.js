

import axios from "axios"
import 나만의페이지 from "../../section01/01-01-example" 


export default function RestGetPage () {


    function onClickAsync () {

       const result = axios.get("https://koreanjson.com/posts/1")
       console.log(result)  //promise 반환
    }

    

    // 함수 선언식 (함수 중복문제로 잘 사용 X)
    // async function onClickSync () {

    //    const result = await axios.get("https://koreanjson.com/posts/1")
    //    console.log(result) // 응답결과 반환 (값을 받을 때까지 기다림)
    //    console.log(result.data) // 결과값 = [객체] (axios가 json형태를 자동으로 객체로 다시 변환해줌)
    // }


    // 화살표 함수 (중복문제 해결 가능, 또는 함수표현식 사용)
      const onClickSync = async() => {

        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result) // 응답결과 반환 (값을 받을 때까지 기다림)
        console.log(result.data) // 결과값 = [객체], (axios가 json형태를 자동으로 객체로 다시 변환해줌)
     }
 


    return (

        <div>
            <button onClick={onClickAsync} >REST-API(비동기) 요청</button>
            <button onClick={onClickSync} >REST-API(동기) 요청</button>
            <나만의페이지 />
        </div>
    )
}