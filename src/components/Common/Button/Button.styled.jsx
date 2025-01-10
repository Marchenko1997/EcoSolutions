import styled from "styled-components";

export const LinkBtn = styled.a`
  width: 130px;
  height: 39px;
  background-color: var(--accent-color);
  color: var(--main-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding-top: 2px;
  border-radius: 500px;

  svg {
    margin-top: -2px;
    fill: var(--main-dark);
    stroke: var(--main-dark);
  }

  @media screen and (min-width: 1280px) {
    transition: all var(--hover-effect);

    svg {
      transition: fill var(--hover-effect);
    }

    &:hover {
      background-color: var(--main-dark);
      color: var(--accent-color);

      svg {
        fill: var(--accent-color);
      }
    }
  }
`;
