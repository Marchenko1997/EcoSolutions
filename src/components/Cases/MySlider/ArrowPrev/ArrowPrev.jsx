import sprite from "../../../../images/icons.svg";
import { ArrowStyled } from "./ArrowPrev.styled";

const ArrowPrev = ({ onClick }) => {
  return (
    <ArrowStyled onClick={onClick}>
      <svg width={66} height={66}>
        <use xlinkHref={`${sprite}#icon-prev`}></use>
      </svg>
    </ArrowStyled>
  );
};

export default ArrowPrev;
