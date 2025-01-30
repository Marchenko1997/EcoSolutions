import styled from "styled-components";

export const GeneralContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    row-gap: 32px;
  }
`;

export const Content = styled.div`
  max-width: 244px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  color: var(--main-dark);

  p {
    letter-spacing: -0.04em;
    font-size: 16px;
    font-weight: 400;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 8px;
    font-size: 20px;
    letter-spacing: -0.04em;
    color: var(--main-dark);
  }

  @media screen and (min-width: 1280px) {
    max-width: 466px;
    row-gap: 16px;

    a {
      font-size: 24px;

      &:hover {
        svg {
          stroke: var(--accent-color);
        }
      }
    }

    svg {
      transition: all var(--hover-effect);
    }
  }
`;

export const Icon = styled.svg`
  min-width: 24px;
  min-height: 24px;
  fill: none;
  stroke: var(--main-dark);
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 8px;

  @media screen and (min-width: 1280px) {
    max-width: 56px;
    max-height: 24px;
  }
`;
