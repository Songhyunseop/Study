import { useEffect, useRef } from "react";

export default function FoucsOn() {
  const Fileref = useRef();

  useEffect(() => {
    Fileref.current?.focus();
  });

  return (
    <>
      <input type="password" ref={Fileref} />
    </>
  );
}
