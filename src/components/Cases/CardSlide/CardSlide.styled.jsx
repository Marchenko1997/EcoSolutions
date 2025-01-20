import styled from "styled-components";

export const SlideContainer = styled.div`
  background: var(--cards-bg);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: 342px;
    max-width: 342px;
    height: 322px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 520px;
    max-width: 520px;
    height: 470px;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 61px;
  padding: 24px 12px 21px;

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.04em;
    text-align: justify;
    color: var(--main-dark);
  }

  a {
    svg {
      fill: var(--accent-color);
      stroke: var(--main-dark);
      transition: all var(--hover-effect);
    }
  }

  @media screen and (min-width: 768px) {
    column-gap: 64px;
    padding: 24px 12px 16px;

    p {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1280px) {
    column-gap: 83px;
    padding: 36px 16px;

    p {
      font-size: 24px;
    }

    a {
      &:hover {
        svg {
          fill: var(--main-dark);
          stroke: var(--accent-color);
        }
      }
    }
  }
`;

export const TitleDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--main-dark);
  font-size: 12px;
  letter-spacing: -0.04em;
  padding: 12px;
  border-top: 1px solid var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    padding: 24px 16px 36px;
  }
`;
