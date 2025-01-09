import sprite from "../../../images/icons.svg";
import { LogoLink } from "./Logo.styled";

const Logo = () => {
  return (
    <div>
      <LogoLink href="/" aria-label="Reload page">
        <svg width={269} height={40}>
          <use xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
      </LogoLink>
    </div>
  );
};

export default Logo;
