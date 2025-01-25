import { ErrorMsg, Form, Label, SubmitBtn } from "./ContactForm.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../../schemas/schemas";
import { toast } from "react-toastify";
import sprite from "../../../images/icons.svg";
 

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(contactSchema), mode: "onBlur" });

  const onSubmit = (data) => {
    toast.success("Your message has been sent!");
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">
        *&nbsp;Full name:
        <input
          type="text"
          {...register("name")}
          placeholder="John Rosie"
          style={{ borderBottomColor: errors.name && "var(--error-color)" }}
        />
        {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
      </Label>
      <Label htmlFor="Email">
        *&nbsp;Email:
        <input
          type="email"
          {...register("email")}
          placeholder="johnrosie@gmail.com"
          style={{ borderBottomColor: errors.email && "var(--error-color)" }}
        />
        {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
      </Label>
      <Label htmlFor="phone">
        *&nbsp;Phone:
        <input
          type="tel"
          {...register("phone")}
          placeholder="380961234567"
          style={{ borderBottomColor: errors.phone && "var(--error-color)" }}
        />
        {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
      </Label>
      <Label htmlFor="message">
        Message:
        <textarea {...register("message")} placeholder="Your message" />
      </Label>
      <SubmitBtn type="submit">
        Send
        <svg width={32} height={32}>
          <use xlinkHref={`${sprite}#icon-arrow-up-right`}></use>
        </svg>
      </SubmitBtn>
    </Form>
  );
};

export default ContactForm;
