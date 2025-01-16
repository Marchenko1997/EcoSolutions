import TitleHero from "./TitleHero/TitleHero";
import { SectionHero, ContentHero, TextContainer } from "./Hero.styled";
import TextHero from "./TextHero/TextHero.jsx";
import LearnMoreBtn from "./LearnMoreBtn/LearnMoreBtn.jsx";
import AdressInfo from "./AdressInfo/AdressInfo.jsx";
import HeroImage from "./HeroImage/HeroImage.jsx";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
      },
    },
  };
  return (
    <SectionHero
      id="hero"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewpoint={{ once: true }}
    >
      <ContentHero>
        <TitleHero />
        <TextContainer>
          <TextHero />
          <LearnMoreBtn />
        </TextContainer>
      </ContentHero>
      <AdressInfo />
      <HeroImage />
    </SectionHero>
  );
};

export default Hero;
