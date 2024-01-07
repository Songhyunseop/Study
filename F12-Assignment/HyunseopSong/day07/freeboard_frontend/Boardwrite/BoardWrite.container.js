
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD } from "./BoardWrite.queries"
import BoardUI from "./BoardWrite.presenter"


export default function BoardFn () {


    const [Write, setWrite] = useState("")
    const [Pw, setPw] = useState("")
    const [Titlee, setTitlee] = useState("")
    const [Contents, setContents] = useState("")


    const [WriteError, setWriteError] = useState("")
    const [PwError, setPwError] = useState("")
    const [TitleError, setTitleError] = useState("")
    const [ContentsError, setContentsError] = useState("")


    const  [createBoard] = useMutation(CREATE_BOARD)
    const router = useRouter()



    
    function ChangeWrite (event) {

        setWrite(event.target.value)
        console.log(event)
    }



    function ChangePw (event) {


        setPw(event.target.value)

    }



    function ChangeTitle (event) {

        setTitlee(event.target.value)
    }


    


    function ChangeContent (event) {

        setContents(event.target.value)
    }



    // const [done,setDone] = useState(false)  // 문제점 : 초기값이 첫 실행에서는 재할당 안됨
                                              // 두 번째 실행부터 할당되기 시작 (왜?) => [async가 비동기처리 되서]

    


    const SignBtn = () => {


        if(!Write) {
            
            setWriteError("이름이 올바르지 않습니다")

        } else {

            setWriteError("")
        }


        if(!Pw) {

            setPwError("비밀번호가 올바르지 않습니다")

        } else {

            setPwError("")
        }


        if(!Titlee) {

            setTitleError("제목이 올바르지 않습니다")

        } else {

            setTitleError("")
        }


        if(!Contents) {

            setContentsError("내용을 입력해 주세요")

        } else {

            setContentsError("")
        }


        
    }





    const CreateBtn = async() => {

        if(Write && Pw && Titlee && Contents) {



         const result = await createBoard({variables: 
                {writer:Write, 
                title: Titlee, 
                contents: Contents}})

                console.log(result)
          
                

               router.push(`/board-page1/${result.data.createBoard.number}`) 

        }
    }



    return(

        <div>
            <BoardUI aaa={WriteError}
                     bbb={PwError}
                     ccc={TitleError}
                     ddd={ContentsError}
                     chgWrite={ChangeWrite}
                     chgPw={ChangePw}
                     chgTitle={ChangeTitle}
                     chgContent={ChangeContent}
                     btn={CreateBtn}
                     sign={SignBtn}
                     create={CreateBtn}
                      />
        </div>
    )
}