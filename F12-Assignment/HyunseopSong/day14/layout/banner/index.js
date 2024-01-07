import { Banner_ } from "../emotion";

export default function Banner(props) {
  return (
    <Banner_>
      <div>{props.children}</div>
    </Banner_>
  );
}
