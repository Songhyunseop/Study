import { useRouter } from "next/router";
import * as S from "./emotion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 1300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  lazyLoad: true,
};

export default function LayOut(props) {
  const router = useRouter();

  const Hidden = [
    `/BoardWrite`,
    `/BoardWrite/${router.query.number}/BoardEdit`,
  ];

  const IsHidden = Hidden.includes(router.asPath);

  return (
    <S.Wrapper>
      {IsHidden ? undefined : (
        <S.StyledSlick {...settings}>
          <div>
            <S.BannerBox>
              Carousel<img src="/Rocket.png"></img>
            </S.BannerBox>
          </div>
          <div>
            <S.BannerBox>
              Carousel<img src="/Rocket.png"></img>
            </S.BannerBox>
          </div>
          <div>
            <S.BannerBox>
              Carousel<img src="/Rocket.png"></img>
            </S.BannerBox>
          </div>
        </S.StyledSlick>
      )}
      <S.Component>{props.children}</S.Component>
    </S.Wrapper>
  );
}
