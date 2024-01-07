

import styled from "@emotion/styled"


export const RedInput = styled.input`
border-color: red;
`


export const BlueButton = styled.button` // 화살표함수 {} 없으면 리턴이 표시되고 있다고 생각하면 됨
background-color: ${(props)=> props.isActive ? "yellow" : ""};  
`