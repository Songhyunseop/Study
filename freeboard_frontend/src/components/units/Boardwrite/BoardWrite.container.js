
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import BoardUI from "./BoardWrite.presenter"


export default function BoardFn (props) {


    const [Write, setWrite] = useState("")
    const [Pw, setPw] = useState("")
    const [Titlee, setTitlee] = useState("")
    const [Contents, setContents] = useState("")


    const [WriteError, setWriteError] = useState("")
    const [PwError, setPwError] = useState("")
    const [TitleError, setTitleError] = useState("")
    const [ContentsError, setContentsError] = useState("")

    const [isValid, setIsValid] = useState(false)


    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const router = useRouter()



    
    function ChangeWrite (event) {

        setWrite(event.target.value)
        console.log(event)

        if(event.target.value && Pw && Titlee && Contents) {

            setIsValid(true)

        } else {
            setIsValid(false)
        }
    }



    function ChangePw (event) {


        setPw(event.target.value)

        if(event.target.value && Write && Titlee && Contents) {

            setIsValid(true)

        } else {

            setIsValid(false)

        }

    }



    function ChangeTitle (event) {

        setTitlee(event.target.value)

        if(event.target.value && Pw && Write && Contents) {

            setIsValid(true)

        } else {

            setIsValid(false)

        }
    }


    


    function ChangeContent (event) {

        setContents(event.target.value)

        if(event.target.value && Pw && Titlee && Write) {

            setIsValid(true)

        } else {

            setIsValid(false)

        }
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

            

         const result = await createBoard({variables:{
            
            createBoardInput:{
                writer:Write, 
                password:Pw,
                title: Titlee, 
                contents: Contents}}})

                console.log(result)
                
               router.push(`/board-page1/${result.data.createBoard._id}`) 

        }
    }




    const EditBtn = async() => {

        const myVariables = {updateBoardInput:{}}

        myVariables.boardId = router.query.number

        if(Titlee) {
            myVariables.updateBoardInput.title = Titlee}
        
        if(Pw) {
            myVariables.password = Pw}


        if(Contents) {    
            myVariables.updateBoardInput.contents = Contents}
        
        
         console.log(myVariables)   

        
    try {

      const result = await updateBoard({variables: myVariables})

      console.log("hi")
      console.log(result)

        router.push(`/board-page1/${router.query.number}`)

     } catch(error) {
            alert(error.message)
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
                     isEdit={props.isEdit}
                     EditBtn={EditBtn}
                     data={props.data}
                     isValid={isValid}
                      />
        </div>
    )
}