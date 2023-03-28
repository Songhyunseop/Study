

 
 import styled from "@emotion/styled";



 
 export const Wrapper = styled.div`
 width: 1200px;
 height: 1200px;
 margin: 0 auto;
 `
 
 
 
 export const Board_Title = styled.div`
 height: 511px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 `
 
 
 export const TitleName = styled.div`
 padding-top: 80px;
 text-align: center;
 font-weight: 700;
 font-size: 36px;
 `
 
 
 
  export const Board_Body = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  `
 
  
 
 export const Contents_List = styled.div`
 `
 
 
 
 export const Search = styled.div`
 height: 20%;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 `
 
 
 
 export const Search_Title = styled.input`
 width: 776px;
 height: 52px;
 background: #F2F2F2;
 border-radius: 10px;
 padding-left: 11px;
 `
 
 
 export const Search_Date = styled.input`
 border: 2px solid red;
 width: 244px;
 height: 52px;
 border: 1px solid #BDBDBD;
 text-align: center;
 ::placeholder {
     color: #BDBDBD;
 }
 
 `
 
 
 export const Search_Btn = styled.button`
 width: 94px;
 height: 52px;
 background-color: black;
 border-radius: 10px;
 color: white;
 font-weight: 500;
 font-size: 16px;
 letter-spacing: 1px;
 cursor: pointer;
 
 :active {
     transform: translateX(2px) translateY(2px);
 }
 `
 
 
 
 export const Table = styled.table`
 border-top: 1px solid black;
 border-bottom: 1px solid black;
 border-collapse: collapse;
 `
 
 
 
 
 
 
 export const TableTitle = styled.th`
 height: 52px;
 font-weight: 500;
 font-size: 18px;
 `
 
 
 
 export const Board_List = styled.tr`
 font-size: 16px;
 line-height: 24px;
 :hover {
 
     background-color: #F2F2F2;
 }
 `
 
 
 export const BoardItem1 = styled.td`
 border-top: 1px solid #BDBDBD;;
 height: 52px;
 width: 10%;
 text-align: center;
 line-height: 3;
 `
 
 export const BoardItem2 = styled.td`
 border-top: 1px solid #BDBDBD;;
 height: 52px;
 width: 65%;
 text-align: center;
 line-height: 3;
 cursor: pointer;
 `
 
 export const BoardItem3 = styled.td`
 border-top: 1px solid #BDBDBD;;
 height: 52px;
 width: 15%;
 text-align: center;
 line-height: 3;
 `
 
 export const BoardItem4 = styled.td`
 border-top: 1px solid #BDBDBD;;
 height: 52px;
 width: 10%;
 text-align: center;
 line-height: 3;
 `
 
 
 
 
 export const Board_Bottom = styled.div`
 height: calc(1200px - 90%);
 display: flex;
 flex-direction: row;
 justify-content: flex-end;
 align-items: center;
 `
 
 
 
 export const Bottom_Box = styled.div`
 width: 650px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 65px;
 
 `
 
 
 
 
 
 export const PageNumber = styled.div`
 width: 100px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 
 `
 
 
 
 export const Arrow = styled.img`
 width: 7px;
 height: 12px;
 `
 
 
 
 export const Page = styled.span`
 
 :hover {
     cursor: pointer;
     color: gold;
 }
 `
 
 
 
 
 
 export const Create_Board = styled.button`
 width: 171px;
 height: 52px;
 background-color: white;
 border-radius: 10px;
 margin-left: 20px;
 font-weight: 500;
 font-size: 16px;
 border: 1px solid #F2F2F2;
 box-shadow: 2px 2px gray;
 cursor: pointer;
 :active {
 
 
     transform: translateX(2px) translateY(2px);
     box-shadow: none;
 }
 `
 