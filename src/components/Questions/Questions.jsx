import TitleFAQ from "./TitleFAQ/TitleFAQ";
import { Section, FlexContainer } from "./Questions.styled";
import ListQuestions from "./ListQuestions/ListQuestions";

const Questions = () => {
  return (
    <Section>
      <FlexContainer>
        <TitleFAQ />
        <ListQuestions />
      </FlexContainer>
    </Section>
  );
};

export default Questions;
