import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 39px;
  background-color: var(--accent-light);
  border: none;
  border-radius: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    min-width: 16px;
    min-height: 16px;
    stroke: var(--main-dark);
  }

  @media screen and (min-width: 1280px) {
    transition: background-color var(--hover-effect);

    &:hover {
      background-color: var(--accent-color);
    }
  }
`;
