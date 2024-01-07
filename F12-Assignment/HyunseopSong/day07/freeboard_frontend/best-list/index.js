
import { useQuery, gql } from "@apollo/client";

import { Wrapper,Board_Title,Board_Body, Contents_List,Search,Search_Title,
         Search_Date, Search_Btn,Board_List,Board_Bottom,PageNumber,Create_Board,
         BoardItem1, BoardItem2, BoardItem3, BoardItem4,TableTitle,Table,TitleName } from "../../src/components/units/BoardList/BoardList.styles";





         const FETCH_BOARDS = gql `query {
  
            fetchBoards {
              
              number
              title
              writer
              createdAt
            }
          }
          `



export default function List () {


    const {data} = useQuery(FETCH_BOARDS)

    console.log(data?.fetchBoards)


    return (

        <Wrapper>
            <Board_Title>
                <TitleName>베스트게시글</TitleName>
                <Contents_List></Contents_List>
                <Search>
                    <Search_Title></Search_Title>
                    <Search_Date></Search_Date>
                    <Search_Btn></Search_Btn>
                </Search>
            </Board_Title>
            <Board_Body>
                <Table>
                  <tbody>
                    <tr>
                        <TableTitle>번호</TableTitle>
                        <TableTitle>제목</TableTitle>
                        <TableTitle>작성자</TableTitle>
                        <TableTitle>날짜</TableTitle>
                    </tr>        
                  {data?.fetchBoards.map( el => (
                 <Board_List>
                        <BoardItem1>{el.number}</BoardItem1>
                        <BoardItem2>{el.title}</BoardItem2>
                        <BoardItem3>{el.writer}</BoardItem3>
                        <BoardItem4>{el.createdAt.slice(0,10)}</BoardItem4>     
                 </Board_List> ) ) }
                  </tbody> 
                </Table>
            </Board_Body>
            <Board_Bottom>
                <PageNumber></PageNumber>
                <Create_Board></Create_Board>
            </Board_Bottom>
        </Wrapper>
    )
}