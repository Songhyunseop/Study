import { BlueButton, RedInput } from "./BoardWrite.styles";


export default function BoardWriteUI (props) {

                                                // data가 undefined일 때는 아래에 defaultValue가 공백으로 표시됨
    return(                         
    <div>
        <div>여기는 프리젠터입니다</div>
        <div>
        작성자: <RedInput input type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer} />
        제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data && props.data?.fetchBoard.title} />
        내용: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} />
         <BlueButton button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
            {props.isEdit ? "수정" : "등록"}하기
         </BlueButton>
        </div>
        <div>여기는 프리젠터입니다</div>
    </div>
    )
}