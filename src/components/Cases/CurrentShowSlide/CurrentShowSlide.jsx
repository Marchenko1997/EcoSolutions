import { ContainerNumberSlides } from "./CurrentShowSlide.styled";

const CurrentShowSlide = ({ currentSlide }) => {
  return (
    <ContainerNumberSlides>
      0{currentSlide}
      <span>/05</span>
    </ContainerNumberSlides>
  );
};

export default CurrentShowSlide;
