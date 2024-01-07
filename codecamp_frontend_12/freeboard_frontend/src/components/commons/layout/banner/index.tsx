import * as S from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 3700,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const NotShow = ["/Login"];

export default function Banner() {
  const router = useRouter();

  const NotForBanner = NotShow.includes(router.asPath);

  return (
    <>
      <S.WrapperTop>여기는 로그인과 타이틀</S.WrapperTop>
      {NotForBanner ? undefined : (
        <S.Wrapper>
          <S.WrapperBottom>
            <S.StyledSlider {...settings}>
              <>
                <S.CarouselBox src="/carousel01.png" />
              </>
              <>
                <S.CarouselBox src="/carousel02.png" />
              </>
            </S.StyledSlider>
            <S.MenuBar>
              <S.Menu_Item>
                <span>자유게시판</span>
                <span style={{ color: "white" }}>|</span>
                <span>중고마켓</span>
                <span style={{ color: "white" }}>|</span>
                <span>마이페이지</span>
              </S.Menu_Item>
            </S.MenuBar>
          </S.WrapperBottom>
        </S.Wrapper>
      )}
    </>
  );
}
