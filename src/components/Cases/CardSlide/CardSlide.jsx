import sprite from "../../../images/icons.svg";
import {
  SlideContainer,
  SlideContent,
  TitleDateContainer,
} from "./CardSlide.styled";

const CardSlide = ({ card }) => {
  const { img, title, description, date, link } = card;

  return (
    <SlideContainer>
      <img src={img} alt={title} />
      <SlideContent>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Go to web page of ${description}`}
        >
          <svg width={60} height={60}>
            <use xlinkHref={`${sprite}#icon-arrow-up-right`}></use>
          </svg>
        </a>
      </SlideContent>
      <TitleDateContainer>
        <p>{title}</p>
        <p>{date}</p>
      </TitleDateContainer>
    </SlideContainer>
  );
};

export default CardSlide;
