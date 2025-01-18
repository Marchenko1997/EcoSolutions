import imgSunEnergy1x from "../../../../images/values/sun-energy-tablet-1x.webp";
import imgSunEnergy2x from "../../../../images/values/sun-energy-tablet-2x.webp";
import imgSunEnergy3x from "../../../../images/values/sun-energy-tablet-3x.webp";
import imgSunEnergyDesktop1x from "../../../../images/values/sun-energy-1x.webp";
import imgSunEnergyDesktop2x from "../../../../images/values/sun-energy-2x.webp";
import imgSunEnergyDesktop3x from "../../../../images/values/sun-energy-3x.webp";
import { ImageContainer } from "./ImageSun.styled";
const ImageSun = () => {
    return (
      <ImageContainer>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${imgSunEnergyDesktop1x} 1x, ${imgSunEnergyDesktop2x} 2x, ${imgSunEnergyDesktop3x} 3x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imgSunEnergy1x} 1x, ${imgSunEnergy2x} 2x, ${imgSunEnergy3x} 3x`}
            type="image/webp"
          />
          <img
            src={imgSunEnergy1x}
            alt="Sun energy generation with solar panels"
            loading="lazy"
          />
        </picture>
      </ImageContainer>
    );
};

export default ImageSun;
