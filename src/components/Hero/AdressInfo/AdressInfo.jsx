
import { InfoContainer } from "./AdressInfo.styled";

const AddressInfo = () => {
  return (
    <InfoContainer>
      <address>
        <a
          href="https://maps.app.goo.gl/kbqRNic8UJtqqZdm7"
          target="_blank"
          rel="noreferrer"
          aria-label="Show on Google Maps address of Ecosolution company"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
      </address>
      <a
        href="mailto:office@ecosolution.com"
        aria-label="Write and send email to EcoSolution"
      >
        office@ecosolution.com
      </a>
      <p>ecosolution &copy; 2023</p>
    </InfoContainer>
  );
};

export default AddressInfo;
