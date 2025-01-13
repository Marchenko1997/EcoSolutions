import styled from "styled-components";

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;

  a {
    color: var(--white-color);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.04em;
    display: flex;
    align-items: center;
    column-gap: 8px;

    span {
      svg {
        stroke: var(--white-color);
        transition: stroke var(--hover-effect);
      }
    }
  }

  .active {
    color: var(--accent-color);

    span {
      svg {
        stroke: var(--accent-color);
      }
    }
  }

  @media screen and (min-width: 1280px) {
    a {
      color: var(--gray-color);
      cursor: pointer;
      transition: color var(--hover-effect);

      span {
        svg {
          stroke: var(--gray-color);
        }
      }

      &:hover {
        color: var(--white-color);

        span {
          svg {
            stroke: var(--white-color);
          }
        }
      }
    }
  }
`;
