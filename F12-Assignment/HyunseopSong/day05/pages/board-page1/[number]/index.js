
import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"


import {Wrapper,Title,Privacy,Profile,Body,Bottom,Name,Date,User,Emoji,
        UpBox,UpBox_Title,DownBox,DownBox_Like,ContentsBox,AlertBox,Text,
        Wrapper_Bottom, BtnBox, CommentBox,Page_Btn,Cmt_Title,Cmt_LogIn,
        Cmt_Users,Cmt_Content,Cmt_Title_Content} from "../../../styles/board-page/emotion"




       const FETCH_BOARD = gql `query fetchBoard($number:Int) {
  
            fetchBoard(number:$number) {
              
              writer
              title
              contents
            }
          }
        `
          




export default function Board () {


    const [IsVisible, setIsVisible] = useState(false)

    const router = useRouter()
    console.log(router)

    const {data} = useQuery(FETCH_BOARD, {variables:{

        number: Number(router.query.number)
    }})



    const toggleVisible = () => {

        setIsVisible(!IsVisible)

    }

    

    return(

        <div>
            <Wrapper>
                <Title>
                    <Privacy>
                        <Profile src="/Profile.png"></Profile>
                        <User>
                        <Name>{data?.fetchBoard?.writer}</Name>
                        <Date>Date: 2021.02.18</Date>
                        </User>
                    </Privacy>
                    <Emoji>
                     <img src="/Link.png"></img>
                     <img src="/Location.png" onClick={toggleVisible}></img>
                    </Emoji>
                </Title>
                {IsVisible && <AlertBox src="/alertBox.png" ></AlertBox>}
                <Text>서울특별시 영등포구 양산로 200<br />
                      (영등포동 5가, 영등포시장역) 영등포 타임스퀘어 2층
                </Text>
                <Body>
                    <UpBox>
                        <UpBox_Title>{data?.fetchBoard?.title}</UpBox_Title>
                        <img src="/concert.png"></img>
                        <ContentsBox>{data?.fetchBoard?.contents}</ContentsBox>
                    </UpBox>
                </Body>
                <Bottom>
                    <DownBox>
                        <img src="/Video.png"></img>
                        <DownBox_Like>
                            <img src="/Like.png"></img>
                            <img src="/Dislike.png"></img>
                        </DownBox_Like>
                    </DownBox>
                </Bottom>
            </Wrapper>
            <Wrapper_Bottom>
                <BtnBox>
                    <Page_Btn>목록으로</Page_Btn>
                    <Page_Btn>수정하기</Page_Btn>
                    <Page_Btn>삭제하기</Page_Btn>
                </BtnBox>
                <CommentBox>
                    <Cmt_Title>
                        <Cmt_Title_Content>
                           <img src="/Comment.png" ></img>댓글
                        </Cmt_Title_Content>
                    </Cmt_Title>
                    <Cmt_LogIn></Cmt_LogIn>
                    <Cmt_Content></Cmt_Content>
                    <Cmt_Users></Cmt_Users>
                </CommentBox>
            </Wrapper_Bottom>
        </div>
    )
}







