import Presenter from "./child";

export default function Container() {
  return <>{Presenter({ child: "철수" })}</>;
}
