import sprite from "../../../images/icons.svg";
import { CardContainer, TextCard, TitleContainer } from "./CardValue.styled";

const CardValue = ({ card }) => {
  const { icon, title, text } = card;

  return (
    <CardContainer>
      <TitleContainer>
        <svg width={16} height={16}>
          <use xlinkHref={`${sprite}#${icon}`}></use>
        </svg>
        <h3>{title}</h3>
      </TitleContainer>
      <TextCard>{text}</TextCard>
    </CardContainer>
  );
};

export default CardValue;
