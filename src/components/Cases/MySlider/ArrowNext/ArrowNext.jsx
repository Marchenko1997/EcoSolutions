import sprite from "../../../../images/icons.svg";
import { ArrowStyled} from "./ArrowNext.styled";

const ArrowNext = ({onClick}) => {
  return (
    <ArrowStyled onClick={onClick}>
      <svg width={66} height={66}>
        <use xlinkHref={`${sprite}#icon-next`}></use>
      </svg>
    </ArrowStyled>
  );
}

export default ArrowNext