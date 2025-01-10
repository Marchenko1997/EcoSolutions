import { Backdrop, ModalContainer } from "./Modal.styled";

const Modal = ({children, fn}) => {
    return <><Backdrop>
        <ModalContainer>{children}</ModalContainer>
    </Backdrop></>;
};

export default Modal;
