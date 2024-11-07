import { Button } from "@mui/material";
import classes from "./ButtonForm.module.scss";
import { IPropsButton, IPropsChildren } from "@/types/props.types";

export default function ({ children, onClick }: IPropsButton) {
  return (
    <Button className={classes.btn} variant="outlined" onClick={onClick}>
      {children}
    </Button>
  );
}
