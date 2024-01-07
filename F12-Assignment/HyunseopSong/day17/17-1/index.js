import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LifeCycle() {
  const router = useRouter();
  const [isChanged, setIsChanged] = useState(false);

  const onClickEdit = () => {
    setIsChanged(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!!");

    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    if (isChanged) {
      alert("Changed!!");
    }
  }, [isChanged]);

  return (
    <>
      <button onClick={onClickEdit}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
