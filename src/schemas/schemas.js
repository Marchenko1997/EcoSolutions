import * as yup from "yup";

const nameRegExp = /^[A-Za-z\s]+$/;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegExp = /^380\d{9}$/;

export const contactSchema = yup.object().shape({
    name: yup.string().matches(nameRegExp, "Wrong Fullname").required(),
    email: yup.string().matches(emailRegExp, "Wrong Email").required(),
    phone: yup.string().matches(phoneRegExp, "Wrong Phone").required(),
})
