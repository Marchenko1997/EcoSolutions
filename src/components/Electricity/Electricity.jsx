import TitleElectricity from "./TitleElectricity/TitleElectricity";
import { SectionElectricity, VerticalLine } from "./Electricity.styled";
import QualityEnergy from "./QualityEnergy/QualityEnergy";

const Electricity = () => {
  const variants = {
    hidden: { opacity: 0, x: 150 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };
  return (
    <SectionElectricity
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <TitleElectricity />
      <VerticalLine></VerticalLine>
      <QualityEnergy />
    </SectionElectricity>
  );
};

export default Electricity;
