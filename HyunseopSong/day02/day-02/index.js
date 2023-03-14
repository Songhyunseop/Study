

import {Wrapper,
        Title, Body__header,
        Writer, Password, NameTag,
        NameTagSpan,TitleBox,Content,
        Mail,AddresNum,Btn, AddresBox,
        YoutubeLink,UploadBox, Box, Plus,
        RadioCheck,SignUp, SignUpBtn} from "../../styles/emotion"


export default function Home () {




    return (

        <div>
            <Wrapper>
                <Title>게시물 등록</Title>
                <NameTag>
                    <span>작성자</span><NameTagSpan>비밀번호</NameTagSpan>
                </NameTag>
                <Body__header>
                   <Writer type="text" placeholder="이름을 적어주세요" />
                   <Password type="password" placeholder="비밀번호를 입력해주세요" /> 
                </Body__header>
                <NameTag>제목</NameTag>
                <TitleBox type="text" placeholder="제목을 작성해주세요" ></TitleBox>
                <NameTag>내용</NameTag>
                <Content type="text" />주소
                <Mail>
                    <AddresNum type="number" placeholder="07250" />
                    <Btn>우편번호 검색</Btn>
                </Mail>
                <TitleBox type="text" />
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
                    <SignUpBtn>등록하기</SignUpBtn>
                </SignUp>
            </Wrapper>
        </div>
    )

}