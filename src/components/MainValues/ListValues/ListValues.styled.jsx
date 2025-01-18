import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);

    > :nth-child(3),
    > :nth-child(4) {
      grid-column-end: span 2;
    }
  }
`;
