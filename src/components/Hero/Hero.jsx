import TitleHero from "./TitleHero/TitleHero"
import { SectionHero, ContentHero } from "./Hero.styled"

const Hero = () => {
  return (
      <SectionHero>
          <ContentHero>
              <TitleHero />
          </ContentHero>
    </SectionHero>
  )
}

export default Hero