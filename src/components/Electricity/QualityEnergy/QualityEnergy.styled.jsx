import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    column-gap: 24px;
  }
`;

export const Numbers = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
  }
`;

export const Kilowatt = styled.span`
  font-family: "Oswald", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: var(--main-dark);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.71;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
