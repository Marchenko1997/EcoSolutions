import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)``;

export const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;
