import TitleFAQ from "./TitleFAQ/TitleFAQ"
import {Section, FlexContainer} from "./Questions.styled"

const Questions = () => {
  return (
    <Section>
      <FlexContainer>
        <TitleFAQ />
      </FlexContainer>
    </Section>
  );
}

export default Questions