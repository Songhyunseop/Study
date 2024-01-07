import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  const onClickSync = async (): Promise<void> => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(result); // 응답결과 반환 (값을 받을 때까지 기다림)

    setDog(result.data.message);
  };

  useEffect(() => {
    void onClickSync();
  }, []);

  return (
    <div>
      <img src={dog}></img>
    </div>
  );
}
