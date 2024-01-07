import { useQuery, gql } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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

export default function StaticRoutingPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    {
      variables: {
        page: 1,
      },
    }
  );

  const onClickBasket = (basket: IBoard) => () => {
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    ); // 기존의 장바구니 목록 가져오기(배열형태로)

    const temp = baskets.filter((el) => el._id === basket._id); // 상품을 이미 담았을 경우를 체크

    if (temp.length >= 1) {
      alert("이미 담은 상품입니다");
      return;
    }

    const { __typename, ...newBasket } = basket;

    baskets.push(newBasket); // 내가 클릭한 상품 장바구니에 추가

    localStorage.setItem("baskets", JSON.stringify(baskets)); // 클릭한 것 배열로 로컬에 저장
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
