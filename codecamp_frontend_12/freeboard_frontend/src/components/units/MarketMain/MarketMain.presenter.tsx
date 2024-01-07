import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, FETCH_USED_ITEMS } from "./MarketMain.queries";
import * as S from "./MarketMain.styles";
import InfiniteScroll from "react-infinite-scroller";
import Link from "next/link";
import { LoginWithAuth } from "../../commons/hoc/withauth";

function MarketPresenter(props) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: usedItemdata, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onLoadMore = () => {
    if (usedItemdata === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((usedItemdata?.fetchUseditems.length ?? 10) / 10) + 1,
        isSoldout: false,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <>
      <S.Wrapper>
        <S.Contents>
          <S.Title>베스트 상품</S.Title>
          <S.Header>
            <S.BestProduct></S.BestProduct>
          </S.Header>
          <S.Body>
            <S.Body_Top>
              <S.SellingorSelled>
                <span>판매중상품</span>
                <span>판매된상품</span>
              </S.SellingorSelled>
              <S.SearchBar>
                <S.SearchProduct>제품을 검색해주세요</S.SearchProduct>
                <S.SearchDate>/2022.12.02~2022.12.02</S.SearchDate>
                <S.SearchBtn>/검색</S.SearchBtn>
              </S.SearchBar>
            </S.Body_Top>
            <S.ScrollProductBox>
              <InfiniteScroll
                pageStart={0}
                loadMore={onLoadMore}
                hasMore={true}
                useWindow={false}
              >
                <>
                  {usedItemdata?.fetchUseditems.map((el) => (
                    <S.Body_ProductList key={el._id}>
                      <S.ProductImage>
                        {el.images.map(
                          (elmnt, idx) =>
                            elmnt !== "" && (
                              <img
                                key={idx}
                                src={`https://storage.googleapis.com/${el.images[idx]}`}
                              />
                            )
                        )}
                      </S.ProductImage>
                      <S.ProductContents>{el.name}</S.ProductContents>
                      <S.Price>{el.price}</S.Price>
                    </S.Body_ProductList>
                  ))}
                </>
              </InfiniteScroll>
            </S.ScrollProductBox>
          </S.Body>
          <S.Bottom>
            <Link href="/create-product">
              <S.A>상품등록하기</S.A>
            </Link>
          </S.Bottom>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}

export default LoginWithAuth(MarketPresenter);
