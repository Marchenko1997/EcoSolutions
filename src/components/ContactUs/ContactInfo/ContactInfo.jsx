import SocialMedia from "../../Common/SocialMedia/SocialMedia";
import {
  Content,
  GeneralContainer,
  Icon,
  SocialMediaContainer,
} from "./ContactInfo.styled";

const ContactInfo = () => {
  return (
    <GeneralContainer>
      <Content></Content>
      <Content>
        <SocialMediaContainer>
          <SocialMedia />
        </SocialMediaContainer>
      </Content>
    </GeneralContainer>
  );
};

export default ContactInfo;
