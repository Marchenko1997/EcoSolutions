import ArrowPrev from "./ArrowPrev/ArrowPrev";
import ArrowNext from "./ArrowNext/ArrowNext";
import CardSlide from "../CardSlide/CardSlide";
import { sliderCards } from "../../../data/sliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, StyledSlide } from "./MySlider.styled";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const MySlider = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const [currentSlide, setCurrentSlide] = useState(isTablet ? 2 : 1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 2 : 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    afterChange: (current) => {
      if (!isTablet) {
        setCurrentSlide(current + 1);
      }
      else {
        if (current + 1 < 5) {
          setCurrentSlide(current + 2)
        }
        else {
          setCurrentSlide(1)
        }
      }
    }
  }

  return (
    <SliderContainer>
      <Slider {...settings}>
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
