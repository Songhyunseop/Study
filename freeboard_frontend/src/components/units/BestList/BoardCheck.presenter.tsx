import * as S from "./BoardCheck.styles";
import { IBestListUIProps } from "./BoardCheck.types";

export default function BestListUI(props: IBestListUIProps) {
  return (
    <S.Wrapper>
      <S.Board_Title>
        <S.TitleName>베스트게시글</S.TitleName>
        <S.Contents_List></S.Contents_List>
        <S.Search>
          <S.Search_Title placeholder=" 제목을 검색해 주세요" />
          <S.Search_Date placeholder="YYYY.MM.DD ~ YYY.MM.DD" />
          <S.Search_Btn>검색하기</S.Search_Btn>
        </S.Search>
      </S.Board_Title>
      <S.Board_Body>
        <S.Table>
          <tbody>
            <tr>
              <S.TableTitle>번호</S.TableTitle>
              <S.TableTitle>제목</S.TableTitle>
              <S.TableTitle>작성자</S.TableTitle>
              <S.TableTitle>날짜</S.TableTitle>
            </tr>
            {props.data?.fetchBoards.map((el: any, idx: number) => (
              <S.Board_List key={el._id}>
                <S.BoardItem1>{idx + props.Next}</S.BoardItem1>
                <S.BoardItem2 id={el._id} onClick={props.clickNext}>
                  {el.title}
                </S.BoardItem2>
                <S.BoardItem3>{el.writer}</S.BoardItem3>
                <S.BoardItem4>{el.createdAt.slice(0, 10)}</S.BoardItem4>
              </S.Board_List>
            ))}
          </tbody>
        </S.Table>
      </S.Board_Body>
      <S.Board_Bottom>
        <S.Bottom_Box>
          <S.PageNumber>
            <S.PageBtn onClick={props.MoveFirst}>첫 페이지</S.PageBtn>
            <S.Arrow onClick={props.MovePrev} src="/arrow_left.png"></S.Arrow>
            {new Array(10).fill(1).map((el, idx) => (
              <S.Page
                style={{
                  color: props.targetNum === String(idx) ? "gold" : "",
                }}
                id={idx}
                onClick={props.ClickNumber}
                key={idx}
              >
                {props.Next + idx}
              </S.Page>
            ))}
            <S.Arrow onClick={props.MoveNext} src="/arrow_right.png"></S.Arrow>
            <S.PageBtn onClick={props.MoveEnd}>마지막 페이지</S.PageBtn>
          </S.PageNumber>
          <S.Create_Board onClick={props.GoCreate}>
            게시물 등록하기
          </S.Create_Board>
        </S.Bottom_Box>
      </S.Board_Bottom>
    </S.Wrapper>
  );
}
