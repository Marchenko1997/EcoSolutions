import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  margin: 0 -8px;

  @media screen and (min-width: 768px) {
    margin: 0 -12px;
  }
`;

export const StyledSlide = styled.div`
  padding: 0 8px;

  @media screen and (min-width: 768px) {
    padding: 0 12px;
  }
`;
