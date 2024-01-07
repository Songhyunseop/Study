

import {Wrapper,
    Title, Body__header,
    Writer, Password, NameTag,
    NameTagSpan,TitleCt,Content,
    Mail,AddresNum,Btn, AddresBox,
    YoutubeLink,UploadBox, Box, Plus,
    RadioCheck,SignUp, SignUpBtn,Error,
    NameBox, PwBox, TitleBox,ContentsDisplay} from "../../../../styles/sign/emotion"




export default function BoardUI (props) {



    return(
      <div>
           <div>
            <Wrapper>
                <Title>게시물 등록</Title>
                <NameTag>
                    <span>작성자</span><NameTagSpan>비밀번호</NameTagSpan>
                </NameTag>
                <Body__header>
                  <NameBox>
                    <Writer onChange={props.chgWrite} type="text" placeholder="이름을 적어주세요" />
                    <Error>{props.aaa}</Error>
                  </NameBox>
                  <PwBox>
                    <Password onChange={props.chgPw} type="password" placeholder="비밀번호를 입력해주세요" />
                    <Error>{props.bbb}</Error>
                  </PwBox>
                </Body__header>
                <NameTag>제목</NameTag>
                  <TitleBox>
                    <TitleCt onChange={props.chgTitle} type="text" placeholder="제목을 작성해주세요" ></TitleCt>
                    <Error>{props.ccc}</Error>
                  </TitleBox>
                  <ContentsDisplay>
                    <NameTag>내용</NameTag>
                    <Error>{props.ddd}</Error>
                  </ContentsDisplay>
                <Content onChange={props.chgContent} type="text" />주소
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
                    <SignUpBtn onClick={()=>{props.sign(), props.create()}} >등록하기</SignUpBtn> 
                </SignUp>                                                                 
            </Wrapper>                                  
        </div>
      </div>
        
    )
}