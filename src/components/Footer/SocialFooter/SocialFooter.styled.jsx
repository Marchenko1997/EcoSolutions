import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  letter-spacing: -0.04em;

  div,
  address {
    a {
      color: var(--main-dark);
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    address,
    div {
      a {
        transition: color var(--hover-effect);

        &:hover {
          color: var(--accent-color);
        }
      }
    }

    div {
      a {
        margin-left: 202px;
      }
    }
  }
`;
