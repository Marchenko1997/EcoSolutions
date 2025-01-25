import ContactTitle from "./ContactTitle/ContactTitle"
import { Section, FlexContainer } from "./ContactUs.styled"
import ContactForm from "./ContactForm/ContactForm"

const ContactUs = () => {
  return (
      <Section>
          <ContactTitle />
          <FlexContainer>
              <ContactForm />
          </FlexContainer>
    </Section>
  )
}

export default ContactUs