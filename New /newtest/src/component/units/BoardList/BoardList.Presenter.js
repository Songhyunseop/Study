import InfiniteScroll from "react-infinite-scroller";
import * as S from "./BoardList.styles";

export default function ListPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.LoadMoreList}
          hasMore={true}
          useWindow={false}
        >
          <>
            {props.data2?.fetchBoards.map((el, idx) => (
              <S.BoardList onClick={props.ClickBoard} id={el._id} key={el._id}>
                <span style={{ cursor: "pointer" }}>{el.title}</span>
                <span style={{ cursor: "pointer" }}>
                  {el.createdAt.slice(0, 10)}
                </span>
              </S.BoardList>
            ))}
          </>
        </InfiniteScroll>
      </S.Wrapper>
    </>
  );
}
