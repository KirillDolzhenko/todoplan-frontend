import { IPropsChildren } from "@/types/props.types";
import classes from "./HeadingForm.module.scss";

export default function ({ children }: IPropsChildren) {
  return <h2 className={classes.heading}>{children}</h2>;
}
