import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
  letter-spacing: -0.04em;
  margin-top: 24px;
  margin-bottom: 36px;

  a {
    color: var(--main-dark);
  }

  p {
    display: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 40px;

    p {
      display: unset;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-top: 12px;
    margin-bottom: 36px;

    a {
      transition: color var(--hover-effect);

      &:hover {
        color: var(--accent-color);
      }
    }

    > a {
      margin-left: 154px;
    }
  }
`;
