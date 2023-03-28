import { ChangeEvent } from "react";  //Change 메소드는 react에서 제공하기 때문에 react에서 import해서 사용해야 함




export interface IBoardWriteProps {
    isEdit: boolean
    data?: any         // data는 백엔드에서 받아오기 때문에 아직 어떤 타입인지 잘모름 (any 로 임시 지정)
}



export interface IVariables {

    number: number
    writer?: string
    title?: string
    contents?: string
}



export interface IBoardWriteUIProps {

    onClickSubmit: () => void     // 함수, return 값으로 타입 지정, void = return 값 없음
    onClickUpdate: () => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit: boolean
    data?: any
}