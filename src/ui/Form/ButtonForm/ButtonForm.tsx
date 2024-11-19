import { Button } from "@mui/material";
import classes from "./ButtonForm.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import { IPropsButton, IPropsChildren } from "@/types/props.types";

export default function ({
  children,
  onClick,
  loading,
  disabled,
  type = "button",
}: IPropsButton) {
  return (
    <>
      {/* {loading ? ( */}
      {/* <LoadingButton className={classes.btn} loading variant="outlined">
        kkk
      </LoadingButton> */}
      {/* ) : ( */}
      <LoadingButton
        className={classes.btn}
        type={type}
        loading={loading}
        disabled={disabled}
        variant="outlined"
        onClick={onClick}
      >
        {children}
      </LoadingButton>
      {/* )} */}
    </>
  );
}
