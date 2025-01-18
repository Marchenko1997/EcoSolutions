import { useState, useEffect } from "react";
import { FlexContainer, Kilowatt, Numbers } from "./QualityEnergy.styled";

const QualityEnergy = () => {
  const initialEnergy = Number(localStorage.getItem("energy")) || 1134147814;
  const [energy, setEnergy] = useState(initialEnergy);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((energy) => {
        const newEnergy = energy + 1;
        localStorage.setItem("energy", newEnergy);
        return newEnergy;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <FlexContainer>
      <Numbers>{energy.toLocaleString("de-DE")}</Numbers>
      <Kilowatt>kWh</Kilowatt>
    </FlexContainer>
  );
};

export default QualityEnergy;
