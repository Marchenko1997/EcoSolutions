import { LinkBtn } from "./Button.styled";
import sprite from "../../../images/icons.svg";

const Button = ({ text, link }) => {
  return (
    <LinkBtn href={link}>
      <p>{text}</p>
      <svg width={15} height={15}>
        <use xlinkHref={`${sprite}#icon-btn-arrow-down`}></use>
      </svg>
    </LinkBtn>
  );
};

export default Button;
