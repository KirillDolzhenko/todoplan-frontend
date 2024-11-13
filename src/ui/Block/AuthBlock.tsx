"use client";

import classes from "./AuthBlock.module.scss";
import clsx from "clsx";
import SignUpForm from "@/pages/SignUpForm/SignUpForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LogInForm from "@/pages/LogInForm/LogInForm";
import { svgCheckmark } from "@/links/svg.links";
import Link from "next/link";
import StoreProviderHOC from "../HOC/StoreProviderHOC";

export default function AuthPage() {
  let router = useRouter();
  let params2 = useSearchParams();

  let [register, setRegister] = useState<boolean>(
    params2?.get("active") === "true"
  );

  useEffect(() => {
    router.push(`auth?active=${register}`);
  }, [register]);

  return (
    <StoreProviderHOC>
      <div className={clsx(classes.block, register && classes.active)}>
        <div className={classes.block__mask}>
          <div className={classes.block__container}>
            <LogInForm
              onClick={() => setRegister((register) => !register)}
              className={clsx(classes.block__item, classes.block__login)}
            />
            <SignUpForm
              className={clsx(classes.block__item, classes.block__signup)}
              onClick={() => setRegister((register) => !register)}
            />
          </div>
          <Link href={"/"} className={classes.block__icon}>
            <svg>
              <use href={`${svgCheckmark}#icon`} />
            </svg>
          </Link>
        </div>
      </div>
    </StoreProviderHOC>
  );
}
