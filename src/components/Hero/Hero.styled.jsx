import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionHero = styled(motion.section)`
  padding-top: 189px;
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-top: 240px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 264px;
    padding-bottom: 123px;
  }
`;

export const ContentHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 55px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
    border-bottom: 1px solid var(--accent-color);
    padding-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--accent-color);

    div {
      width: 342px;
      height: 100%;
      align-items: flex-start;
      row-gap: 43px;
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    div {
      row-gap: 20px;
    }
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 1280px) {
    min-width: 363px;
    margin-right: 96px;
  }
`;
