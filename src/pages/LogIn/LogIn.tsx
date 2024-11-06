"use client";

import Input from "@mui/material/Input";
import classes from "./LogIn.module.scss";
import Button from "@mui/material/Button";

export default function () {
  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <h1>LogIn</h1>
        <div className={classes.form__content}>
          <Input className={classes.input} placeholder="Password"></Input>
          <Input className={classes.input} placeholder="Login"></Input>
        </div>
        <div className={classes.form__btns}>
          <Button className={classes.btn} variant="outlined">
            Regiter
          </Button>
          <Button className={classes.btn} variant="outlined">
            LogIn
          </Button>
        </div>
      </div>
      <div className={classes.bg}></div>
    </div>
  );
}
