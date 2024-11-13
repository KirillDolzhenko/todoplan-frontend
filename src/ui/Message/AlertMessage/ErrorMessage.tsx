import classes from "./AlertMessage.module.scss";
import Alert from "@mui/material/Alert/Alert";
import clsx from "clsx";
import React from "react";
import { IPropsMessage } from "@/types/props.types";

function ErrorMessage({ message }: IPropsMessage) {
  return (
    <Alert
      className={clsx(classes.alert, classes.error)}
      variant="standard"
      severity="error"
    >
      {message || "Something goes wrong..."}
    </Alert>
  );
}

export default ErrorMessage;
