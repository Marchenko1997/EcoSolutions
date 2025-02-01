import styled from "styled-components";

export const FlexContainer = styled.div`
  max-width: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 19px;
  padding: 24px 0;
  margin: 0 auto;
  border-top: 1px solid var(--accent-color);

  > a {
    transform: rotate(-45deg);
    margin-top: 6px;

    svg {
      stroke: var(--main-dark);
      fill: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    column-gap: unset;
    padding: 24px 0 16px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 0 16px 0;

    > a {
      svg {
        transition: all var(--hover-effect);
      }

      &:hover {
        svg {
          fill: var(--main-dark);
          stroke: var(--accent-color);
        }
      }
    }
  }
`;

export const UpperBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SocialContainer = styled.div`
  width: 100px;
  max-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 44px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 56px;
    padding-left: 0;
    margin-left: 97px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 372px;
  }
`;
