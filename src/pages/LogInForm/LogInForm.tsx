"use client";

import classes from "./LogInForm.module.scss";
import InputForm from "@/ui/Form/InputForm/InputForm";
import ButtonForm from "@/ui/Form/ButtonForm/ButtonForm";
import HeadingForm from "@/ui/Heading/HeadingForm/HeadingForm";
import clsx from "clsx";
import { IPropsButton, IPropsClassName, IPropsForm } from "@/types/props.types";

export default function ({ className, onClick }: IPropsForm) {
  return (
    <div className={clsx(classes.form, className)}>
      <HeadingForm>Login</HeadingForm>
      <div className={classes.form__content}>
        <InputForm placeholder="Login"></InputForm>
        <InputForm placeholder="Password"></InputForm>
      </div>
      <div className={classes.form__btns}>
        <ButtonForm>Login</ButtonForm>
        <ButtonForm onClick={onClick}>Register</ButtonForm>
      </div>
    </div>
  );
}
