

import { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"


import {Wrapper,
        Title, Body__header,
        Writer, Password, NameTag,
        NameTagSpan,TitleCt,Content,
        Mail,AddresNum,Btn, AddresBox,
        YoutubeLink,UploadBox, Box, Plus,
        RadioCheck,SignUp, SignUpBtn,Error,
        NameBox, PwBox, TitleBox,ContentsDisplay} from "../../styles/sign/emotion"




        const CREATE_BOARD = gql `mutation createBoard($writer:String, $title:String, $contents:String){
  
            createBoard(writer:$writer, title:$title, contents:$contents) {
              
              _id
              number
              message
            }
          }
        `


export default function Home () {



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





    return (

        <div>
            <Wrapper>
                <Title>게시물 등록</Title>
                <NameTag>
                    <span>작성자</span><NameTagSpan>비밀번호</NameTagSpan>
                </NameTag>
                <Body__header>
                  <NameBox>
                    <Writer onChange={ChangeWrite} type="text" placeholder="이름을 적어주세요" />
                    <Error>{WriteError}</Error>
                  </NameBox>
                  <PwBox>
                    <Password onChange={ChangePw} type="password" placeholder="비밀번호를 입력해주세요" />
                    <Error>{PwError}</Error>
                  </PwBox>
                </Body__header>
                <NameTag>제목</NameTag>
                  <TitleBox>
                    <TitleCt onChange={ChangeTitle} type="text" placeholder="제목을 작성해주세요" ></TitleCt>
                    <Error>{TitleError}</Error>
                  </TitleBox>
                  <ContentsDisplay>
                    <NameTag>내용</NameTag>
                    <Error>{ContentsError}</Error>
                  </ContentsDisplay>
                <Content onChange={ChangeContent} type="text" />주소
                <Mail>
                    <AddresNum type="number" placeholder="07250" />
                    <Btn>우편번호 검색</Btn>
                </Mail>
                <AddresBox type="text" />
                <AddresBox type="text" />
                <NameTag>유튜브</NameTag>
                <YoutubeLink type="text" placeholder="링크를 복사해 주세요" ></YoutubeLink>
                <NameTag>사진첨부</NameTag>
                <UploadBox>
                    <Box><Plus>+</Plus><br />Upload</Box>
                    <Box><Plus>+</Plus><br />Upload</Box>
                    <Box><Plus>+</Plus><br />Upload</Box>
                </UploadBox>
                <NameTag>메인 설정</NameTag>
                <RadioCheck>
                      <input type="radio" name="chk"/>유튜브
                      <input type="radio" name="chk"/>사진
                </RadioCheck>
                <SignUp>
                    <SignUpBtn onClick={()=>{SignBtn(), CreateBtn()}} >등록하기</SignUpBtn> 
                </SignUp>                                                                 
            </Wrapper>                                  
        </div>
    )

}