import axios from "axios";
import { useState } from "react";

export default function Callback() {
  const [List, setList] = useState("");
  const ThisCallback = () => {
    const request1 = new XMLHttpRequest();
    request1.open("get", "http://numbersapi.com/random?min=1&max=200");
    request1.send();
    request1.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];

      const request2 = new XMLHttpRequest();
      request2.open("get", `https://koreanjson.com/posts/${num}`);
      request2.send();
      request2.addEventListener("load", (res) => {
        const UserId = JSON.parse(res.target.response).UserId;

        const request3 = new XMLHttpRequest();
        request3.open("get", `https://koreanjson.com/posts?userId=${UserId}`);
        request3.send();
        request3.addEventListener("load", (res) => {
          setList(JSON.parse(res.target.response));
        });
      });
    });
  };

  const ThisPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const UserId = res.data.UserId;

        return axios.get(`https://koreanjson.com/posts?userId=${UserId}`);
      })
      .then((res) => {
        setList(res.data);
      });
  };

  const ThisAsyncAwait = async () => {
    const result1 = await axios.get(
      "http://numbersapi.com/random?min=1&max=200"
    );
    const num = result1.data.split(" ")[0];

    const result2 = await axios.get(`https://koreanjson.com/posts/${num}`);

    const UserId = result2.data.UserId;

    const result3 = await axios.get(
      `https://koreanjson.com/posts?userId=${UserId}`
    );

    setList(result3.data);
  };

  return (
    <>
      <div>
        결과: <button onClick={ThisCallback}>Callback</button>
        결과: <button onClick={ThisPromise}>Promise</button>
        결과: <button onClick={ThisAsyncAwait}>Async/Await</button>
      </div>
      {List &&
        List.map((el) => (
          <div key={el.id} style={{ border: "2px solid black" }}>
            {el.title}
          </div>
        ))}
    </>
  );
}
