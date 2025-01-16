import styled from "styled-components";

export const LinkBtn = styled.a`
  width: 141px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px solid var(--accent-color);
  border-radius: 500px;
  color: var(--main-dark);
  letter-spacing: -0.04em;
  line-height: 1.12;
  padding: 4px 4px 4px 16px;

  @media screen and (min-width: 1280px) {
    transition: all var(--hover-effect);

    &:hover {
      background-color: var(--main-dark);
      color: var(--accent-color);
    }
  }
`;
