import axios from "axios";
import { useEffect, useState } from "react";

export default function Dog() {
  const [Photo, setPhoto] = useState("");

  const ClickDog = async () => {
    const result = await axios.get("https://dog.ceo/api/breeds/image/random");

    setPhoto(result.data.message);
  };

  useEffect(() => {
    ClickDog();
  }, []);

  return (
    <>
      <img src={Photo}></img>
    </>
  );
}
