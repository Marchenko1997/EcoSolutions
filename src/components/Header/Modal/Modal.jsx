import { Backdrop, ModalContainer } from "./Modal.styled";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, fn }) => {
  const modalRoot = document?.getElementById("modal-root");
  const backdropRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef?.current) {
      fn && fn(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        fn(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    if (fn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "auto";
    };
  }, [fn]);

  return (
    <>
      {createPortal &&
        ((
          <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
            <ModalContainer>{children}</ModalContainer>
          </Backdrop>
        ),
        modalRoot)}
    </>
  );
};

export default Modal;
