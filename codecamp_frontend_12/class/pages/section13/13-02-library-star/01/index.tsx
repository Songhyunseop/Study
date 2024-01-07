import { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

    const onChangeStar (val: number):void => {

      setValue(val)
    }

  return <Rate onChange={onChangeStar} value={value} />; // 여기서 onChange는 일반적인 onChange가 아닌 해당 라이브러리 개발자들이 만든 onChange (매개변수로 event를 받지 않음)
}

//
//
//
//
//
// [위의 구조와 아래의 구조는 같음 (함수표현식 vs 함수선언식 차이)]

// const App: React.FC = () => {
//  const [value, setValue] = useState(3);

//  return <Rate onChange={setValue} value={value} />;

// };
