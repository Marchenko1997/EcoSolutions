
import ImgHero from "../../../images/hero/hero-1x.webp";
import ImgHero2x from "../../../images/hero/hero-2x.webp";
import ImgHero3x from "../../../images/hero/hero-3x.webp";
import ImgHeroTablet from "../../../images/hero/hero-tablet-1x.webp";
import ImgHeroTablet2x from "../../../images/hero/hero-tablet-2x.webp";
import ImgHeroTablet3x from "../../../images/hero/hero-tablet-3x.webp";
import ImgHeroMobile from "../../../images/hero/hero-mobile-1x.webp";
import ImgHeroMobile2x from "../../../images/hero/hero-mobile-2x.webp";
import ImgHeroMobile3x from "../../../images/hero/hero-mobile-3x.webp";
import { ImageBox } from "./HeroImage.styled";

const HeroImage = () => {
  return (
    <ImageBox>
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${ImgHero} 1x, ${ImgHero2x} 2x, ${ImgHero3x} 3x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${ImgHeroTablet} 1x, ${ImgHeroTablet2x} 2x, ${ImgHeroTablet3x} 3x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${ImgHeroMobile} 1x, ${ImgHeroMobile2x} 2x, ${ImgHeroMobile3x} 3x`}
          type="image/webp"
        />
        <img
          src={ImgHeroMobile}
          alt="Wind turbines for electricity generation"
        />
      </picture>
    </ImageBox>
  );
};

export default HeroImage;
