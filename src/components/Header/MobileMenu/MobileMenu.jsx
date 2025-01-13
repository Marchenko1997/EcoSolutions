
import Modal from "../Modal/Modal";
import Menu from "../Menu/Menu";
import SocialMedia from "../../Common/SocialMedia/SocialMedia";
import sprite from "../../../images/icons.svg";
import { BtnBox, CloseBtn, SocialMediaBox } from "./MobileMenu.styled";

const MobileMenu = ({ fn }) => {
  return (
    <Modal fn={fn}>
      <BtnBox>
        <CloseBtn onClick={() => fn(false)} type="button">
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
          close
        </CloseBtn>
      </BtnBox>
      <Menu fn={fn} />
      <SocialMediaBox>
        <SocialMedia />
      </SocialMediaBox>
    </Modal>
  );
};

export default MobileMenu;
