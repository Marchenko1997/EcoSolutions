import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 197px;
  background: var(--cards-bg);
  padding: 13px 16px 0;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }

  @media screen and (min-width: 1280px) {
    width: 252px;
    min-width: 252px;
    height: 302px;
    padding: 48px 16px 0px 16px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;
  margin-bottom: 33px;

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    text-transform: uppercase;
    color: var(--main-dark);
  }

  svg {
    fill: var(--cards-bg);
    stroke: var(--main-dark);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 51px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 94px;

    h3 {
      font-size: 32px;
    }

    svg {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
    }
  }
`;

export const TextCard = styled.p`
  font-size: 14px;
  letter-spacing: -0.04em;
  text-align: justify;
  padding-top: 12px;
  border-top: 1px solid var(--accent-color);

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    padding-top: 24px;
  }
`;
