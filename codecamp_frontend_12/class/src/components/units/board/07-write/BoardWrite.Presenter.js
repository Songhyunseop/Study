import { BlueButton, RedInput } from "./BoardWrite.styles";


export default function BoardWriteUI (props) {

    
    return(
    <div>
        <div>여기는 프리젠터입니다</div>
        <div>
        작성자: <RedInput input type="text" onChange={props.onChangeWriter}/>
        제목: <input type="text" onChange={props.onChangeTitle}/>
        내용: <input type="text" onChange={props.onChangeContents}/>
         <BlueButton   //presenter의 자식요소들을 이런 식으로 전달 가능
           isActive={props.isActive}
           setIsActive={props.setIsActive}
           onClick={props.onClickSubmit} // onclick이란 이름으로 {props.aaa}가 상속되어 전달됨
           writer={props.writer}
           title={props.title}
           contents={props.contents}
           >GraphqlAPI 요청하기</BlueButton>
        </div>
        <div>여기는 프리젠터입니다</div>
    </div>
    )
}