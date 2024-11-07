"use client";

import LogInForm from "@/pages/LogInForm/LogInForm";
import SignUpForm from "@/pages/SignUpForm/SignUpForm";
import classes from "./AuthBlock.module.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

export default function () {
  let router = useRouter();
  let params = useSearchParams();

  let [register, setRegister] = useState<boolean>(
    params?.get("active") === "true"
  );

  useEffect(() => {
    router.push(`auth?active=${register}`);
  }, [register]);

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
