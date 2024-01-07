

// 각각의 게시글 버튼 누르면 그 해당 페이지로 이동하기



import {useRouter} from "next/router"



export default function StaticRoutingPage() {

const router = useRouter() 
    

    const onClickMove1 = () => {

        router.push("/section05/05-02-static-routing-board-moved/1")   // 주소작성시 앞에 `/`를 우선 붙임

    }



    const onClickMove2 = () => {

        router.push("/section05/05-02-static-routing-board-moved/2")

    }



    const onClickMove3 = () => {

        router.push("/section05/05-02-static-routing-board-moved/3")

    }







    return (
         <div>
            <button onClick={onClickMove1} >1번 게시글 이동</button>
            <button onClick={onClickMove2} >2번 게시글 이동</button>
            <button onClick={onClickMove3} >3번 게시글 이동</button>
         </div>
    )  // 한 줄은 () 입력 필요 X

}


