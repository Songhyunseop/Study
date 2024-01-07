import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useState } from "react";
import { v4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function Search() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [keyword, setKeyword] = useState("");

  const searchChange = _.debounce((event) => {
    refetch({ search: event.target.value, page: 1 });
    setKeyword(event.target.value);
  }, 500);

  const onClickPage = (event) => {
    console.log(event.target.id);
    refetch({ page: Number(event.target.id) });
  };

  return (
    <>
      <input type="text" onChange={searchChange} />
      {data?.fetchBoards.map((el, idx) => (
        <table key={idx}>
          <tbody>
            <tr>
              <th>{el.writer}</th>
              <th>
                {el.title
                  .replace(keyword, `$#@secret##${keyword}$#@secret##`)
                  .split("$#@secret##")
                  .map((el) => (
                    <span
                      key={v4()}
                      style={{ color: el === keyword ? "red" : "black" }}
                    >
                      {el}
                    </span>
                  ))}
              </th>
              <th>{el.contents}</th>
            </tr>
          </tbody>
        </table>
      ))}
      <br />
      {new Array(10).fill(1).map((_, idx) => (
        <span id={idx} key={idx} onClick={onClickPage}>
          {idx}
        </span>
      ))}
    </>
  );
}
