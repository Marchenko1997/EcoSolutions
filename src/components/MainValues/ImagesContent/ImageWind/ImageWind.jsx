import imgWindEnergy1x from "../../../../images/values/wind-energy-tablet-1x.webp";
import imgWindEnergy2x from "../../../../images/values/wind-energy-tablet-2x.webp";
import imgWindEnergy3x from "../../../../images/values/wind-energy-tablet-3x.webp";
import imgWindEnergyDesktop1x from "../../../../images/values/wind-energy-1x.webp";
import imgWindEnergyDesktop2x from "../../../../images/values/wind-energy-2x.webp";
import imgWindEnergyDesktop3x from "../../../../images/values/wind-energy-3x.webp";
import { ImageContainer } from "./ImageWind.styled";

const ImageWind = () => {
    return (
      <ImageContainer>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${imgWindEnergyDesktop1x} 1x, ${imgWindEnergyDesktop2x} 2x, ${imgWindEnergyDesktop3x} 3x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imgWindEnergy1x} 1x, ${imgWindEnergy2x} 2x, ${imgWindEnergy3x} 3x`}
            type="image/webp"
          />
          <img
            src={imgWindEnergy1x}
            alt="Wind energy generation with wind turbines"
            loading="lazy"
          />
        </picture>
      </ImageContainer>
    );
};

export default ImageWind;
