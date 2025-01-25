import ContactTitle from "./ContactTitle/ContactTitle"
import { Section, FlexContainer } from "./ContactUs.styled"
import ContactForm from "./ContactForm/ContactForm"
import ContactInfo from "./ContactInfo/ContactInfo"

const ContactUs = () => {
  return (
      <Section>
          <ContactTitle />
          <FlexContainer>
              <ContactInfo />
              <ContactForm />
          </FlexContainer>
    </Section>
  )
}

export default ContactUs