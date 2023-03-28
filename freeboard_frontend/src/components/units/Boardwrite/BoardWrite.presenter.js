


import * as S from "./BoardWrite.styles"


export default function BoardUI (props) {



    return(
      <div>
           <div>
            <S.Wrapper>
                <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
                <S.NameTag>
                    <span>작성자</span><S.NameTagSpan>비밀번호</S.NameTagSpan>
                </S.NameTag>
                <S.Body__header>
                  <S.NameBox>
                    <S.Writer onChange={props.chgWrite} type="text" placeholder="이름을 적어주세요" defaultValue={props.data?.fetchBoard?.writer} readOnly={props.isEdit} />
                    <S.Error>{props.aaa}</S.Error>
                  </S.NameBox>
                  <S.PwBox>
                    <S.Password onChange={props.chgPw} type="password" placeholder="비밀번호를 입력해주세요"/>
                    <S.Error>{props.bbb}</S.Error>
                  </S.PwBox>
                </S.Body__header>
                <S.NameTag>제목</S.NameTag>
                  <S.TitleBox>
                    <S.TitleCt onChange={props.chgTitle} type="text" placeholder="제목을 작성해주세요" defaultValue={props.data?.fetchBoard?.title} ></S.TitleCt>
                    <S.Error>{props.ccc}</S.Error>
                  </S.TitleBox>
                  <S.ContentsDisplay>
                    <S.NameTag>내용</S.NameTag>
                    <S.Error>{props.ddd}</S.Error>
                  </S.ContentsDisplay>
                <S.Content onChange={props.chgContent} defaultValue={props.data?.fetchBoard?.contents} type="text" />주소
                <S.Mail>
                    <S.AddresNum type="number" placeholder="07250" />
                    <S.Btn>우편번호 검색</S.Btn>
                </S.Mail>
                <S.AddresBox type="text" />
                <S.AddresBox type="text" />
                <S.NameTag>유튜브</S.NameTag>
                <S.YoutubeLink type="text" placeholder="링크를 복사해 주세요" ></S.YoutubeLink>
                <S.NameTag>사진첨부</S.NameTag>
                <S.UploadBox>
                    <S.Box><S.Plus>+</S.Plus><br />Upload</S.Box>
                    <S.Box><S.Plus>+</S.Plus><br />Upload</S.Box>
                    <S.Box><S.Plus>+</S.Plus><br />Upload</S.Box>
                </S.UploadBox>
                <S.NameTag>메인 설정</S.NameTag>
                <S.RadioCheck>
                      <input type="radio" name="chk"/>유튜브
                      <input type="radio" name="chk"/>사진
                </S.RadioCheck>
                <S.SignUp>
                    <S.SignUpBtn isValid={props.isValid} onClick={ props.isEdit ? props.EditBtn : ()=>{props.sign(), props.create()}} >{props.isEdit ? "수정" : "등록"}하기</S.SignUpBtn> 
                </S.SignUp>                                                                 
            </S.Wrapper>                                  
        </div>
      </div>
        
    )
}