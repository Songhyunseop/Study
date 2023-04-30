import styled from "@emotion/styled";
import Slider, { Settings } from "react-slick";

interface SliderProps extends Settings {}

export const Wrapper = styled.div`
  height: 562px;
  width: 1920px;
  margin: 0 auto;
  margin-bottom: 80px;
`;

export const StyledSlider = styled(Slider as React.ComponentType)`
  .slick-dots {
    position: absolute;
    bottom: 35px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;
    text-align: center;
  }

  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 15px;
    padding: 0;

    cursor: pointer;
  }

  .slick-dots li button:before {
    font-family: "slick";
    font-size: 36px;
    line-height: 40px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: "♥";
    text-align: center;

    opacity: 0.7;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.85;
    color: gray;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin: 0;
    padding: 0;
  }
`;

export const WrapperTop = styled.div`
  height: 90px;
`;

export const WrapperBottom = styled.div`
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const CarouselBox = styled.img`
  height: 410px;
`;

export const MenuBar = styled.div`
  height: 64px;
  background-color: gold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Menu_Item = styled.div`
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #514400;
`;
