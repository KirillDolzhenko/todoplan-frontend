import Input from "@mui/material/Input";
import classes from "./InputForm.module.scss";
import { IPropsChildren, IPropsInputForm } from "@/types/props.types";

export default function ({ placeholder }: IPropsInputForm) {
  return <Input className={classes.input} placeholder={placeholder}></Input>;
}
