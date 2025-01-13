import { socials } from "../../../data/socialMedia";
import sprite from "../../../images/icons.svg";
import { LinkSocial } from "./SocialMedia.styled";

const SocialMedia = () => {
  return (
    <>
      {socials.map((social) => (
        <LinkSocial
          href={social.link}
          key={social.id}
          target="_blank"
          rel="noreferrer"
        >
          <svg width={24} height={24}>
            <use xlinkHref={`${sprite}#${social.icon}`}></use>
          </svg>
        </LinkSocial>
      ))}
    </>
  );
};

export default SocialMedia;
