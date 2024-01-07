

import { useQuery, gql } from "@apollo/client"
import CheckBox from "./checkbox"


const FETCH_BOARDS = gql`query fetchBoards($page:Int){
        
            fetchBoards(page:$page) {
                number
                writer
                title
                contents
            }
        }
        `



export default function StaticRoutingPage() {

    const {data} = useQuery(FETCH_BOARDS)   // data는 처음에는 없는 값[undefined] (요청 후 응답을 받아서 데이터를 가져와야 data에 그 값이 할당됨)
                                           // 비동기이기 때문에 바로 밑의 return이 동작하고 data가 없을때 data.~~을 불러올 수 없음으로 에러 발생
            
                      
    const qqq = {margin: "10px"}
                                           // 이후 백엔드에서 응답을 받고 data 값이 생기면서 data가 다시 재할당 됨


    const qqq1 = (event: any) => {

        alert("1번클릭")
      
    }                                           
                      
    
    // const qqq2 = (event: any) => {
    //     event.stopPropagation() // qqq3 클릭 시 여기 2번까지만 전파되어 실행 (qqq1은 실행 X 안됨)
    //     alert("2번클릭")
    // }      


    // const qqq3 = (event: any) => {
        
    //     alert("3번클릭")
    // }      


    const qqq4 = (event: any) => {
        
        event.stopPropagation() //qqq4 클릭 시 여기만 실행되고 이벤트 전파 발생 안됨 (중단)
        alert("4번클릭")
    }      






    return (
         <div>
            {data?.fetchBoards.map((el:any) => (
            
            <div onClick={qqq1} id={el.writer} >
                <CheckBox />
                <span style={qqq} onClick={qqq4} >{el.number}</span>
                <span id={el.writer} style={{margin: "10px"}}>{el.title}</span>
                <span style={{margin: "10px"}}>{el.writer}</span>
            </div>
            ))}
         </div>
    ) 

}