import styled from "styled-components";

export const ItemContainer = styled.div`
  cursor: pointer;
`;

export const QuestionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  color: var(--main-dark);
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--accent-color);

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.04em;
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    column-gap: 16px;
    margin-top: ${({ id }) => (id === "1" ? "0" : "16px")};

    span {
      svg {
        width: 28px;
        height: 28px;
        min-width: 28px;
        min-height: 28px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    column-gap: 24px;
    padding-top: 24px;
    margin-top: ${({ id }) => (id === "1" ? "0" : "24px")};

    p {
      font-size: 24px;
    }
  }
`;

export const AnswerBox = styled.div`
  width: calc(100% - 24px);
  font-size: 14px;
  letter-spacing: -0.04em;
  text-align: justify;
  margin-left: auto;
  margin-top: 16px;
  animation: slideIn 800ms ease 1;

  @media screen and (min-width: 768px) {
    width: calc(100% - 44px);
  }

  @media screen and (min-width: 1280px) {
    width: calc(100% - 52px);
    font-size: 16px;
    margin-top: 24px;
  }
`;
