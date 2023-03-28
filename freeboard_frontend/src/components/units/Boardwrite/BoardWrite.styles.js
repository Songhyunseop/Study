


import styled from "@emotion/styled";


export const Wrapper = styled.div `

width: 1200px;
height: 1847px;
box-shadow: 0px 4px 20px;
padding: 0px 103px;
padding-top: 45px;
margin: 0 auto; `



export const Title = styled.div `

font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 53px;
text-align: center;
`



export const NameTag = styled.span `
margin-top: 60px;
display:flex;
justify-content: flex-start;
font-weight: 500;
font-size: 16px;`



export const NameTagSpan = styled.span `
margin-left: 480px
`




export const Body__header = styled.div `

height: 100px;
display:flex;
align-items: flex-start;
`




export const Writer = styled.input `
width: 486px;
height: 52px;
text-indent:15px;
margin-top: 15px;
margin-bottom: 10px;
border: 1px solid #BDBDBD;

`




export const Password = styled.input `

width: 486px;
height: 52px;
margin-left: 35px;
text-indent:15px;
margin-top: 15px;
margin-bottom: 10px;
border: 1px solid #BDBDBD;

`


export const TitleCt = styled.input `

width: 996px;
height: 52px;
border: 1px solid #BDBDBD;
text-indent:15px;

`



export const Content = styled.input`

width: 996px;
height: 480px;
margin-top:15px;
margin-bottom:15px;
border: 1px solid #BDBDBD;

`



export const Mail = styled.div `

margin-top: 10px;
display: flex;
flex-direction: row;`




export const AddresNum = styled.input `
width: 77px;
height: 52px;
border: 1px solid #BDBDBD;
text-align: center;
text-indent: 15px;
`



export const Btn = styled.button `
width: 124px;
height: 52px;
background: black;
margin-left: 15px;
font-weight: 500;
font-size: 16px;
color: white;
`





export const AddresBox = styled.input `

width: 996px;
height: 52px;
margin-top:30px;
border: 1px solid #BDBDBD;
text-indent:15px;

`



export const YoutubeLink = styled.input `
width: 996px;
height: 45.78px;
border: 1px solid #BDBDBD;
margin-top:15px;
text-indent:15px;
`



export const UploadBox = styled.div `
width: 305px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 15px;
`


export const Plus = styled.span `
font-weight: 400;
font-size: 33px;`




export const Box = styled.div `
width: 78px;
height: 78px;
text-align: center;
padding-top: 5px;
background: #BDBDBD;
`


export const RadioCheck = styled.div `
width: 150px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 16px;
`


export const SignUp = styled.div `
display: flex;
justify-content: center;
margin-top: 50px;`



export const SignUpBtn = styled.button `

width: 179px;
height: 52px;
background: #E6E6E6;
font-weight: 500;
font-size: 16px;
background-color:${(props) => (
    props.isValid ? "gold" : "#E6E6E6"
)}
`




export const Error = styled.div`

color: red;
font-size: 12px;`



export const NameBox = styled.div`

display: flex;
flex-direction: column;
align-items: center;
`



export const PwBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;`



export const TitleBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding-top:15px;
height:95px;
`



export const ContentsDisplay = styled.div`
width: 150px;
height: 60px;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;
`