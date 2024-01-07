import { useState } from "react";

export function onClickCount(val) {
  const [counting, setCounting] = useState(val);

  const ClickItMan = () => {
    setCounting((prev) => prev + 1);
  };

  return { ClickItMan, counting };
}
