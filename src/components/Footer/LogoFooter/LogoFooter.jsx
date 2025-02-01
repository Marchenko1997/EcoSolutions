import React from "react";
import Logo from "../../Header/Logo/Logo";
import SocialMedia from "../../Common/SocialMedia/SocialMedia";
import sprite from "../../../images/icons.svg";
import { FlexContainer, SocialContainer, UpperBox } from "./LogoFooter.styled";

const LogoFooter = () => {
  return (
    <FlexContainer>
      <UpperBox>
        <Logo />
        <SocialContainer>
          <SocialMedia />
        </SocialContainer>
      </UpperBox>
      <a href="#hero" aria-label="Go up to Hero section">
        <svg width={32} height={32}>
          <use xlinkHref={`${sprite}#icon-arrow-up-right`}></use>
        </svg>
      </a>
    </FlexContainer>
  );
};

export default LogoFooter;
