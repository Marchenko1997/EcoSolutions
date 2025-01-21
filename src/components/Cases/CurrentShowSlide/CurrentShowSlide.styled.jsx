import styled from "styled-components";

export const ContainerNumberSlides = styled.div`
  width: 72px;
  height: 34px;
  position: absolute;
  top: -54px;
  left: 0;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.04em;
  text-align: justify;
  color: var(--main-dark);

  span {
    color: var(--light-grey);
  }

  @media screen and (min-width: 768px) {
    top: -62px;
    left: 376px;
  }

  @media screen and (min-width: 1280px) {
    top: -152px;
    left: 692px;
  }
`;
