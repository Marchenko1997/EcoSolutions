import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    position: relative;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
    column-gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 154px;
  }
`;
