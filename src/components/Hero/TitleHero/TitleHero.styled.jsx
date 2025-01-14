import styled from "styled-components";

export const Title = styled.h1`
  max-width: 320px;
  font-family: "Oswald", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  color: var(--main-dark);
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 290px;
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 485px;
    font-size: 64px;
  }
`;
