import { Link } from "react-scroll";
import { links } from "../../../data/menu";
import sprite from "../../../images/icons.svg";
import { NavList } from "./Menu.styled";

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
          <span>
            <svg width={16} height={16}>
              <use xlinkHref={`${sprite}#icon-arrow-menu`}></use>
            </svg>
          </span>
        </Link>
      ))}
    </NavList>
  );
};

export default Menu;
