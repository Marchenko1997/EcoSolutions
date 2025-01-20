import TitleCases from "./TitleCases/TitleCases";
import { Section } from "./Cases.styled";
import MySlider from "./MySlider/MySlider";

const Cases = () => {
  const variants = {
    hidden: { opacity: 0, x: -150 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
      },
    },
  };
  return (
    <Section
      id="cases"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div>
        <TitleCases />
        <MySlider />
      </div>
    </Section>
  );
};

export default Cases;
