import sprite from "../../../images/icons.svg";
import { LinkBtn } from "./LearnMoreBtn.styled";

const LearnMoreBtn = () => {
  return (
    <LinkBtn href="#cases" aria-label="Go to section Cases">
      Learn more
      <svg width={32} height={32}>
        <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
      </svg>
    </LinkBtn>
  );
}

export default LearnMoreBtn