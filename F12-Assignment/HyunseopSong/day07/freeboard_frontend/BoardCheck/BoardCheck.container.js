

import { useQuery} from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { FETCH_BOARD } from "./BoardCheck.queries"
import Writing from "./BoardCheck.presenter"


export default function WriteBoard() {


    const [IsVisible, setIsVisible] = useState(false)

    const router = useRouter()
    console.log(router)
    


    const {data} = useQuery(FETCH_BOARD, {

        variables:{number: Number(router.query.number)}
    
    })




    const getList = () => {

        ""
        router.push("/best-list")

    }




    

    const toggleVisible = () => {

        setIsVisible(!IsVisible)

    }


    return  <div><Writing 
            data={data}
            toggleVisible={toggleVisible}
            IsVisible={IsVisible}
            getList={getList} /></div>
    
}