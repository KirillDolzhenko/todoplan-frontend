"use client";

import classes from "./LogInForm.module.scss";
import InputForm from "@/ui/Form/InputForm/InputForm";
import ButtonForm from "@/ui/Form/ButtonForm/ButtonForm";
import HeadingForm from "@/ui/Heading/HeadingForm/HeadingForm";
import clsx from "clsx";
import { IPropsButton, IPropsClassName, IPropsForm } from "@/types/props.types";
import { useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import {
  loginSchema,
  loginType,
} from "@/app/assets/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import ErrorMessage from "@/ui/Message/AlertMessage/ErrorMessage";
import { useLoginMutation } from "@/redux/query/auth.query";
import { IQueryLogin } from "@/types/query.types";

export default function ({ className, onClick }: IPropsForm) {
  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  let [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  let onSubmit = useCallback((data: IQueryLogin) => {
    console.log("SOMETHIING");
    console.log(data);
    login(data);
  }, []);

  return (
    <form
      className={clsx(classes.form, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <HeadingForm>Login</HeadingForm>
      <div className={classes.form__content}>
        <InputForm
          error={errors.email && errors.email.message}
          {...register("email")}
          placeholder="Email"
        ></InputForm>
        <InputForm
          error={errors.password && errors.password.message}
          {...register("password")}
          placeholder="Password"
        ></InputForm>
      </div>
      <div className={classes.form__btns}>
        <ButtonForm
          onClick={() => {
            console.log("FFF");
          }}
          type="submit"
        >
          Login
        </ButtonForm>
        <ButtonForm onClick={onClick}>Register</ButtonForm>
      </div>
      {errors.email ? (
        <ErrorMessage message={errors.email.message} />
      ) : errors.password ? (
        <ErrorMessage message={errors.password.message} />
      ) : isError ? (
        <ErrorMessage message={"Server error"} />
      ) : (
        <></>
      )}
    </form>
  );
}
