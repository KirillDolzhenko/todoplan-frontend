import { Button } from "@mui/material";
import classes from "./ButtonForm.module.scss";
import { IPropsButton, IPropsChildren } from "@/types/props.types";

export default function ({ children, onClick, type = "button" }: IPropsButton) {
  return (
    <Button
      className={classes.btn}
      type={type}
      variant="outlined"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
