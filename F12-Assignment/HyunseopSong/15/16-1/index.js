import InfiniteScroll from "react-infinite-scroller";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function Pagination() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  //
  //
  //

  const onLoadMore = () => {
    if (data === undefined) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards) {
          return { fetchBoards: [...prev.fetchBoards] };
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  console.log(data);

  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <InfiniteScroll
        useWindow={false}
        pageStart={0}
        hasMore={true}
        loadMore={onLoadMore}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <div>{el.writer}</div>
            <div>{el.title}</div>
            <div>{el.contents}</div>
          </div>
        )) ?? <div></div>}
      </InfiniteScroll>
    </div>
  );
}
