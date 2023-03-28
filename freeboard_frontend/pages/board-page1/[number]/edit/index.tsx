



import BoardFn from "../../../../src/components/units/Boardwrite/BoardWrite.container"
import {gql, useQuery} from "@apollo/client"
import { useRouter } from "next/router"




 const FETCH_BOARD = gql` query fetchBoard($boardId:ID!) {
  
    fetchBoard(boardId:$boardId) {
      
      writer
      title
      contents
    }
  }
            `





export default function EditBoard () {

    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD,{variables:{

        boardId: router.query.number
    }})


    console.log(router)




    return (
        <div>
            <BoardFn
            isEdit={true} 
            data={data}/>
        </div>
 
    )

}