import TitleHero from "./TitleHero/TitleHero"
import { SectionHero, ContentHero } from "./Hero.styled"
import TextHero from "./TextHero/TextHero.jsx";

const Hero = () => {
  return (
      <SectionHero>
          <ContentHero>
              <TitleHero />
              <TextHero />
          </ContentHero>
    </SectionHero>
  )
}

export default Hero