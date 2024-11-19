"use client";

import classes from "./LogInForm.module.scss";
import InputForm from "@/ui/Form/InputForm/InputForm";
import ButtonForm from "@/ui/Form/ButtonForm/ButtonForm";
import HeadingForm from "@/ui/Heading/HeadingForm/HeadingForm";
import clsx from "clsx";
import { IPropsForm } from "@/types/props.types";
import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import {
  loginSchema,
  loginType,
} from "@/app/assets/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import ErrorMessage from "@/ui/Message/AlertMessage/ErrorMessage";
import { useLoginMutation } from "@/redux/query/auth.query";
import { setUser } from "@/redux/slices/userSlice/userSlice";
import { RTKErrorMessage } from "@/app/assets/redux/queryError";
import { IMLogin } from "@/types/redux/query.types";

export default function ({ className, onClick }: IPropsForm) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  const [login, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = useCallback((data: IMLogin) => {
    console.log(data);
    login(data);
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }

    if (isError) {
      console.log(isError);
    }
  }, [data, isError, error]);

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
          loading={isLoading}
        >
          Login
        </ButtonForm>
        <ButtonForm onClick={onClick} disabled={isLoading}>
          Register
        </ButtonForm>
      </div>
      {errors.email ? (
        <ErrorMessage message={errors.email.message} />
      ) : errors.password ? (
        <ErrorMessage message={errors.password.message} />
      ) : isError ? (
        <ErrorMessage message={RTKErrorMessage(error)} />
      ) : (
        <></>
      )}
    </form>
  );
}
