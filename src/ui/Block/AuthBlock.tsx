"use client";

import LogInForm from "@/pages/LogInForm/LogInForm";
import SignUpForm from "@/pages/SignUpForm/SignUpForm";
import classes from "./AuthBlock.module.scss";
import { useState } from "react";
import clsx from "clsx";

export default function () {
  let [register, setRegister] = useState<boolean>(false);

  return (
    <div className={clsx(classes.block, register && classes.active)}>
      <div className={classes.block__mask}>
        <div className={classes.block__container}>
          <LogInForm
            onClick={() => setRegister((register) => !register)}
            className={classes.block__item}
          />
          <SignUpForm
            className={classes.block__item}
            onClick={() => setRegister((register) => !register)}
          />
        </div>
      </div>
    </div>
  );
}
