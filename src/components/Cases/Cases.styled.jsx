import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  padding: 36px 0;

  @media screen and (min-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 120px 0;
  }
`;
