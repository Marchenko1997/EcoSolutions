import { NavList } from "./Menu.styled";
import { links } from "../../../data/menu.js";
import { Link } from "react-scroll";
import sprite from "../../../images/icons.svg";

const Menu = ({ fn }) => {
  return (
    <NavList>
      {links.map((link) => (
        <Link
          activeClass="active"
          to={link.url.slice(1)}
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
          key={link.id}
          onClick={() => fn(false)}
        >
          {link.title}
          <svg width={16} height={16}>
            <use xlinkHref={`${sprite}#icon-btn-arrow-down`}></use>
          </svg>
        </Link>
      ))}
    </NavList>
  );
};

export default Menu;
