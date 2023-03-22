

import {Wrapper,Title,Privacy,Profile,Body,Bottom,Name,Date,User,Emoji,
    UpBox,UpBox_Title,DownBox,DownBox_Like,ContentsBox,AlertBox,Text,
    Wrapper_Bottom, BtnBox, CommentBox,Page_Btn,Cmt_Title,Cmt_LogIn,
    Cmt_Users,Cmt_Content,Cmt_Title_Content,WriteBox,PwBox,Rate,
    Cmt_Content_Box, Cmt_Create} from "../../../../styles/board-page/emotion"





export default function Writing (props) {




    return(
     <div>
             <div>
            <Wrapper>
                <Title>
                    <Privacy>
                        <Profile src="/Profile.png"></Profile>
                        <User>
                        <Name>{props.data?.fetchBoard?.writer}</Name>
                        <Date>Date: 2021.02.18</Date>
                        </User>
                    </Privacy>
                    <Emoji>
                     <img src="/Link.png"></img>
                     <img src="/Location.png" onClick={props.toggleVisible}></img>
                    </Emoji>
                </Title>
                {props.IsVisible && <AlertBox src="/alertBox.png" ></AlertBox>}
                <Text>서울특별시 영등포구 양산로 200<br />
                      (영등포동 5가, 영등포시장역) 영등포 타임스퀘어 2층
                </Text>
                <Body>
                    <UpBox>
                        <UpBox_Title>{props.data?.fetchBoard?.title}</UpBox_Title>
                        <img src="/concert.png"></img>
                        <ContentsBox>{props.data?.fetchBoard?.contents}</ContentsBox>
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
                    <Page_Btn onClick={props.getList} >목록으로</Page_Btn>
                    <Page_Btn>수정하기</Page_Btn>
                    <Page_Btn>삭제하기</Page_Btn>
                </BtnBox>
                <CommentBox>
                    <Cmt_Title>
                        <Cmt_Title_Content>
                           <img src="/Comment.png" ></img>댓글
                        </Cmt_Title_Content>
                    </Cmt_Title>
                    <Cmt_LogIn>
                        <WriteBox placeholder="작성자" ></WriteBox>
                        <PwBox placeholder="비밀번호" ></PwBox>
                        <Rate>
                            <img src="/Star.png" ></img>
                            <img src="/Star.png" ></img>
                            <img src="/Star.png" ></img>
                            <img src="/Star.png" ></img>
                            <img src="/Star.png" ></img>
                        </Rate>
                    </Cmt_LogIn>
                    <Cmt_Content>
                        <Cmt_Content_Box placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단광고,
                        불법정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다">
                        </Cmt_Content_Box>
                        <Cmt_Create></Cmt_Create>
                    </Cmt_Content>
                    <Cmt_Users></Cmt_Users>
                </CommentBox>
            </Wrapper_Bottom>
        </div>
     </div>
        
    )
}