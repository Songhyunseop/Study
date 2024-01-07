import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ListPresenter from "./BoardList.Presenter";
import { FETCH_BOARDS } from "./BoardList.query";

export default function ListContainer() {
  const router = useRouter();

  const { data: data2, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: {
      page: 1,
    },
  });

  const LoadMoreList = () => {
    if (data2 === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil(data2?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(prev);
        console.log(fetchMoreResult);
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  const ClickBoard = (event) => {
    router.push(`/BoardWrite/${event.currentTarget.id}`);
  };

  return (
    <>
      <ListPresenter
        data2={data2}
        LoadMoreList={LoadMoreList}
        ClickBoard={ClickBoard}
      />
    </>
  );
}
