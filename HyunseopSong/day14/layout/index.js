import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";
import Navigator from "./navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 10px;
    height: 20px;
    padding: 0px 100px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;

    background: transparent;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    height: 300px;
  }
`;

export default function Layout(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Header />
      <Banner>
        <StyledSlider {...settings}>
          <div>
            <img src="/spring.jpeg"></img>
          </div>
          <div>
            <img src="/summer.jpeg"></img>
          </div>
          <div>
            <img src="/fall.jpeg"></img>
          </div>
          <div>
            <img src="/winter.jpeg"></img>
          </div>
        </StyledSlider>
      </Banner>
      <Navigator />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div>{props.children}</div>
      </div>
      <Footer />
    </>
  );
}
