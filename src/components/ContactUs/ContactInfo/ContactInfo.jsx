import sprite from "../../../images/icons.svg";
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
      <Content>
        <p>Phone:</p>
        <a href="tel:380981234567">
          <Icon width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-call`}></use>
          </Icon>
          38 (098) 12 34 567
        </a>
        <a
          href="tel:380931234567"
          aria-label="Phone number for calling Ecosolution"
        >
          <Icon width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-call`}></use>
          </Icon>
          38 (093) 12 34 567
        </a>
      </Content>
      <Content>
        <p>Email:</p>
        <a
          href="mailto:office@ecosolution.com"
          aria-label="For write and send email to Ecosolution"
        >
          <Icon width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-mail`}></use>
          </Icon>
          office@ecosolution.com
        </a>
      </Content>
      <Content>
        <p>Address:</p>
        <address>
          <a
            href="https://maps.app.goo.gl/kbqRNic8UJtqqZdm7"
            target="_blank"
            rel="noreferrer"
            aria-label="Show on Google Maps address of Ecosolution company"
          >
            <Icon width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-map`}></use>
            </Icon>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
        </address>
      </Content>
      <Content>
        <p>Social Networks:</p>
        <SocialMediaContainer>
          <SocialMedia />
        </SocialMediaContainer>
      </Content>
    </GeneralContainer>
  );
};

export default ContactInfo;
