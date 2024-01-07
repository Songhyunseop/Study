import { useQuery, gql, useMutation } from "@apollo/client";

import {
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

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`useMutation deleteBoard($boardId: ID!) {

    deleteBoard(boardId: $boardId) 
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

  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  interface IPrev {
    __ref: string; // 개발자도구로 apollo dev를 통해 확인해보면 실제로는 key값이 ref로 되어있고 해당 ref를 타고들어가야
    // id, writer 등을 조회 가능함
    // 이 때문에 apollo에서 제공하는 readField 기능으로 ref 너머의 실제 키를 꺼내와서 지정해 줄수 있음
  }

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        const deletedId = data.deleteBoard; // 삭제 완료 후 반환받게 되는 해당 게시글 id
        cache.modify({
          fields: {
            fetchBoards: (prev: IPrev[], { readField }) => {
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // filter로 삭제된 id를 제외한 나머지값만 걸러서 filteredPrev에 담고 이를 return
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = (): void => {
    void 나의함수({
      // $의 각 변수의 값 지정
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목쓰",
          contents: "내용ㅆ",
        },
      },
      // refetchQueries: [{query: FETCH_BOARDS}]
      update(cache, { data }) {
        // cache는 요청 전 기존의 data가 들어가 있음
        // 요청의 결과(ex. 게시글 등록 요청시 요청하는 게시글의 data)는 update의 두번째 인자로 받아올 수 있음!!
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
