import styled from "styled-components";

export const HeaderMain = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 36px 0;
  background-color: ${({ "data-scrolled": scrolled }) =>
    scrolled ? "var(--white-color)" : "var(--main-bg)"};
  transition: background-color 0.3s ease;
  z-index: 100;

  @media screen and (min-width: 1280px) {
    padding: 24px 0;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 100px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  a {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      width: 140px;
    }
  }
`;
