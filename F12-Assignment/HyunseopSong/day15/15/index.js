import { useEffect, useState } from "react";

const { gql, useQuery } = require("@apollo/client");

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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function Pagination() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: data2 } = useQuery(FETCH_BOARDS_COUNT);

  const [isColor, setIsColor] = useState(0);
  const [startPage, setStartPage] = useState(1);

  const [test, setTest] = useState(false);

  const ClickBoard = (event) => {
    setIsColor(event.currentTarget.id);
    refetch({ page: startPage + Number(event.currentTarget.id) });
  };

  const ClickPrev = () => {
    if (startPage >= 1) {
      setStartPage((prev) => prev - 10);
      setTest(!test);
    }
  };

  const ClickNext = () => {
    if (startPage + 10 < Math.ceil(data2.fetchBoardsCount / 10)) {
      setStartPage((prev) => prev + 10);
      setTest(!test);
    }
  };

  useEffect(() => {
    refetch({ page: startPage + Number(isColor) });
  }, [test]);

  console.log(startPage);
  console.log(startPage + Number(isColor));
  console.log(4243242);
  //   console.log(data2?.fetchBoardsCount / 10);

  return (
    <div style={{ width: "1044px", overflow: "hidden" }}>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          {el.writer} {el.title} {el.contents}
        </div>
      ))}

      <button disabled={startPage === 1} onClick={ClickPrev}>{`<`}</button>
      {new Array(10).fill(1).map((_, idx) =>
        Math.ceil(data2?.fetchBoardsCount / 10) >= startPage + idx ? (
          <button
            key={idx}
            id={idx}
            onClick={ClickBoard}
            style={{
              marginLeft: "30px",
              marginRight: "30px",
              backgroundColor: Number(isColor) === idx ? "gold" : "",
            }}
          >
            {startPage + idx}
          </button>
        ) : undefined
      )}
      <button
        disabled={startPage + 10 > Math.ceil(data2?.fetchBoardsCount / 10)}
        onClick={ClickNext}
      >{`>`}</button>
    </div>
  );
}

// Math.ceil(data2?.fetchBoardsCount / 10) > startPage + idx ? false : true;
