import styled from "styled-components";

export const TitleH2 = styled.h2`
  font-family: "Oswald", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  color: var(--main-dark);

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
