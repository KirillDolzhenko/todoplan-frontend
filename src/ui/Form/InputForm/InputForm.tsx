import Input from "@mui/material/Input";
import classes from "./InputForm.module.scss";
import { IPropsInputForm } from "@/types/props.types";
import clsx from "clsx";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";

export default function ({ placeholder, error, ...args }: IPropsInputForm) {
  return (
    <div>
      <Input
        error={Boolean(error)}
        className={clsx(classes.input, error ? classes.error : "")}
        placeholder={placeholder}
        {...args}
      ></Input>
    </div>
  );
}
