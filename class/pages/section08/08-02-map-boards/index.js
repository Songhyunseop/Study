

import { useQuery, gql } from "@apollo/client"



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
                                           
    return (
         <div>
            {data?.fetchBoards.map(el => (
            
            <div>
                <span><input type="checkbox"/></span>
                <span style={qqq}>{el.number}</span>
                <span style={{margin: "10px"}}>{el.title}</span>
                <span style={{margin: "10px"}}>{el.writer}</span>
            </div>
            ))}
         </div>
    ) 

}