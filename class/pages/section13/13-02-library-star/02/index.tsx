import { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  const onChangeStar (val: number):void => setValue(val)

  return <Rate onChange={onChangeStar} value={value} />;
}

//

