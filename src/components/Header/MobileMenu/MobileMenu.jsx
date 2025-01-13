import Modal from "../Modal/Modal";
import { BtnBox, CloseBtn, SocialMediaBox } from "./MobileMenu.styled";
import sprite from "../../../images/icons.svg";
import Menu from "../Menu/Menu";

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
        <Menu fn={fn} />
      </BtnBox>
    </Modal>
  );
};

export default MobileMenu;
