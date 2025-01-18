import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 286px;
  text-align: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 368px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 491px;
  }
`;
