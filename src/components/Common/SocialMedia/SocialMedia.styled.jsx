import styled from "styled-components";

export const LinkSocial = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: var(--main-dark);
    fill: none;
  }

  &:first-of-type {
    svg {
      fill: var(--main-dark);
    }
  }

  @media screen and (min-width: 1280px) {
    svg {
      transition: all var(--hover-effect);
    }

    &:hover {
      svg {
        stroke: var(--accent-color);
      }
    }

    &:first-of-type {
      &:hover {
        svg {
          fill: var(--accent-color);
        }
      }
    }
  }
`;
