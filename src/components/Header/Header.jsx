import Logo from "./Logo/Logo";
import { HeaderContainer, HeaderMain, ButtonsBox } from "./Header.styled";
import { useState, useEffect } from "react";
import BurgerBtn from "./BurgerBtn/BurgerBtn";

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
          </ButtonsBox>
        </HeaderContainer>
      </HeaderMain>
    </>
  );
};

export default Header;
