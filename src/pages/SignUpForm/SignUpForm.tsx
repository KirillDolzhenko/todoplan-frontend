"use client";

import classes from "./SignUpForm.module.scss";
import InputForm from "@/ui/Form/InputForm/InputForm";
import ButtonForm from "@/ui/Form/ButtonForm/ButtonForm";
import HeadingForm from "@/ui/Heading/HeadingForm/HeadingForm";
import { IPropsClassName, IPropsForm } from "@/types/props.types";
import clsx from "clsx";

export default function ({ className, onClick }: IPropsForm) {
  return (
    <div className={clsx(classes.form, className)}>
      <HeadingForm>SignUp</HeadingForm>
      <div className={classes.form__content}>
        <InputForm placeholder="Login"></InputForm>
        <InputForm placeholder="Password"></InputForm>
        <InputForm placeholder="Repeat password"></InputForm>
      </div>
      <div className={classes.form__btns}>
        <ButtonForm onClick={onClick}>Login</ButtonForm>
        <ButtonForm>Register</ButtonForm>
      </div>
    </div>
  );
}
