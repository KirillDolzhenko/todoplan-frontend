import Input from "@mui/material/Input";
import classes from "./InputForm.module.scss";
import { IPropsInputForm } from "@/types/props.types";
import clsx from "clsx";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";

// import TextField from "@mui/material/TextField";


export default function ({ placeholder, error, type, ...args }: IPropsInputForm) {
  return (
    <div>
      <Input
        error={Boolean(error)}
        type={type}
        className={clsx(classes.input, error ? classes.error : "")}
        placeholder={placeholder}
        {...args}
      ></Input>
    </div>
  );
}
