import Logo from "./Logo/Logo";
import { HeaderContainer, HeaderMain, ButtonsBox } from "./Header.styled";
import {useState, useEffect} from 'react'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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
          </HeaderContainer>
        </HeaderMain>
      </>
    );
};

export default Header;
