import { Component } from "react"; // Component를 import 하여 extends 로 상속해서 여러 기능을 사용 가능 (ex. setState 같은 기본 기능들)
import Router from "next/router";

export default class ClassCounterPage extends Component {
  //
  // useState 같은 훅은 class형 컴포넌트에서 사용 불가능 !! (애초에 class컴포넌트에서의 기능을 함수형에서 사용하기 위해 만들어진 것이 훅이기 때문!!)

  state = {
    // 앞에 [this] 가 생략되어 있음!
    count: 0,
  };

  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
  }

  onClickCountUp = (): void => {
    this.setState({ count: 1 });
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  // render 함수 안에 html 코드 작성!
  render(): JSX.Element {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </>
    );
  }
}
