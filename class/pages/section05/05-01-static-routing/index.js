

// 지정 페이지로 이동하기



import {useRouter} from "next/router"



export default function StaticRoutingPage() {

const router = useRouter() 
    

    const onClickMove = () => {

        router.push("/section05/05-01-static-routing-moved")

    }




    return <button onClick={onClickMove} >페이지 이동하기</button>  // 한 줄은 () 입력 필요 X

}