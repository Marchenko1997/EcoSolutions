import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 122px;
  }
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 353px;
    padding-left: 11px;
    border-left: 1px solid var(--accent-color);
  }

  @media screen and (min-width: 1280px) {
    width: 559px;
    padding-left: 100px;
  }
`;
