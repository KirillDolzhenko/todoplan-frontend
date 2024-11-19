"use client";

import classes from "./SignUpForm.module.scss";
import InputForm from "@/ui/Form/InputForm/InputForm";
import ButtonForm from "@/ui/Form/ButtonForm/ButtonForm";
import HeadingForm from "@/ui/Heading/HeadingForm/HeadingForm";
import { IPropsForm } from "@/types/props.types";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import {
  signupSchema,
  signupType,
} from "@/app/assets/validation/signup.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import ErrorMessage from "@/ui/Message/AlertMessage/ErrorMessage";
import { useSignUpMutation } from "@/redux/query/auth.query";
import { RTKErrorMessage } from "@/app/assets/redux/queryError";
import { IMSignUp } from "@/types/redux/query.types";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slices/userSlice/userSlice";

export default function ({ className, onClick }: IPropsForm) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<signupType>({
    resolver: zodResolver(signupSchema),
  });

  const [signup, { isLoading, data, isSuccess, isError, error }] =
    useSignUpMutation();

  const onSubmit = useCallback((data: IMSignUp) => {
    signup(data);
  }, []);

  const dispatch = useAppDispatch();

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
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(classes.form, className)}
    >
      <HeadingForm>SignUp</HeadingForm>
      <div className={classes.form__content}>
        <InputForm
          error={errors.username?.message}
          {...register("username")}
          placeholder="Username"
        ></InputForm>
        <InputForm
          error={errors.email?.message}
          {...register("email")}
          placeholder="Email"
        ></InputForm>
        <InputForm
          error={errors.password?.message}
          {...register("password")}
          placeholder="Password"
          type="password"
        ></InputForm>
        <InputForm
          error={errors.cPassword?.message}
          {...register("cPassword")}
          placeholder="Confirm password"
          type="password"
        ></InputForm>
      </div>
      <div className={classes.form__btns}>
        <ButtonForm disabled={isLoading} onClick={onClick}>
          Login
        </ButtonForm>
        <ButtonForm loading={isLoading} type="submit">
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
