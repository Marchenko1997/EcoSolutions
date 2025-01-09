import styled from "styled-components";

export const LogoLink = styled.a`
  svg {
    fill: var(--main-dark);
    transition: fill var(--hover-effect);
  }

  @media screen and (min-width: 1280px) {
    &:hover {
      svg {
        fill: var(--accent-color);
      }
    }
  }
`;
