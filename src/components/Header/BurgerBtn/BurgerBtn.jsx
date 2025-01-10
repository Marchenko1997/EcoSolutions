import { Button } from "./BurgerBtn.styled";
import sprite from "../../../images/icons.svg";

const BurgerBtn = ({ fn }) => {
  return (
    <div>
      <Button
        type="button"
        aria-label="Open mobile menu"
        onClick={() => fn(true)}
      >
        <svg width={16} height={16}>
          <use xlinkHref={`${sprite}#icon-menu`}></use>
        </svg>
      </Button>
    </div>
  );
};

export default BurgerBtn;
