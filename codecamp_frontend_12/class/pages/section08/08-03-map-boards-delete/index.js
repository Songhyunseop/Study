

import { useQuery, gql, useMutation } from "@apollo/client"
import { Fragment } from "react"


const FETCH_BOARDS = gql`query {
        
            fetchBoards {
                number
                writer
                title
                contents
            }
        }
        `



const DELETE_BOARD = gql`useMutation deleteBoard($number: Int) {

    deleteBoard(number: $number) {

        message
    }
}
`







export default function StaticRoutingPage() {

    const {data} = useQuery(FETCH_BOARDS)   // data는 처음에는 없는 값[undefined] (요청 후 응답을 받아서 데이터를 가져와야 data에 그 값이 할당됨)
                                           // 비동기이기 때문에 바로 밑의 return이 동작하고 data가 없을때 data.~~을 불러올 수 없음으로 에러 발생
            

    const [deleteBoard] = useMutation(DELETE_BOARD)


                      
    const qqq = {margin: "10px"}
                                           // 이후 백엔드에서 응답을 받고 data 값이 생기면서 data가 다시 재할당 됨



    const onClickDelete = (event) => { 
                            // event.target => event 발생한 태그 자체를 가져옴
        deleteBoard({
            variables: {
                number: Number(event.target.id)
            },
            refetchQueries: [{query: FETCH_BOARDS}]
        })                    // 이 때 api 요청으로 db에서 데이터는 삭제되었지만 UI는 그대로임
                              // 새로고침 하면 다시 api 요청이 되고, 이에 따라 db에서 정보를 다시 가져오면서 삭제된 모습이 UI에 구현됨
    }
                              // refetchQueries 를 통해 API 요청 후 재요청으로 페이지 UI를 새로고침해 줌
    


                                           
    return (
        <>
         <div>
            {data?.fetchBoards.map(el => (
            
            <Fragment key={el.number}>  // index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 해당 index 값을 가지게 됨
                <span><input type="checkbox" /></span>
                <span style={qqq} >{el.number}</span>
                <span style={{margin: "10px"}}>{el.title}</span>
                <span style={{margin: "10px"}}>{el.writer}</span>
                <span><button id={el.number} onClick={onClickDelete} >삭제</button></span>
            </Fragment>
            ))}
         </div>
        </> 
    ) 

}







