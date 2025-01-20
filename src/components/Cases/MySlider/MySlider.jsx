import ArrowPrev from "./ArrowPrev/ArrowPrev";
import ArrowNext from "./ArrowNext/ArrowNext";
import CardSlide from "../CardSlide/CardSlide";
import { sliderCards } from "../../../data/sliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, StyledSlide } from "./MySlider.styled";

const MySlider = () => {
  return (
    <SliderContainer>
      <Slider>
        {sliderCards.map((card) => (
          <StyledSlide key={card.id}>
            <CardSlide card={card} />
          </StyledSlide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default MySlider;
