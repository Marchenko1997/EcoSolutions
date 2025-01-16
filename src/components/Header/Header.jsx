import  { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "./MobileMenu/MobileMenu";
import Button from "../Common/Button/Button";
import { HeaderMain, HeaderContainer, ButtonsBox } from "./Header.styled";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <HeaderMain data-scrolled={scrolled}>
        <HeaderContainer>
          <Logo />
          <ButtonsBox>
            <BurgerBtn fn={setOpenMenu} />
            <Button text="Get in touch" link="#contacts" />
          </ButtonsBox>
        </HeaderContainer>
      </HeaderMain>
      {openMenu && <MobileMenu fn={setOpenMenu} />}
    </>
  );
};

export default Header;
