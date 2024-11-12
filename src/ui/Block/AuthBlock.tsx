"use client";

import classes from "./AuthBlock.module.scss";
import clsx from "clsx";
import SignUpForm from "@/pages/SignUpForm/SignUpForm";
// import LogInForm from "";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LogInForm from "@/pages/LogInForm/LogInForm";
// import { svgCheckmark } from "@/links/svg.links";
import Image from "next/image";
import { svgCheckmark } from "@/links/svg.links";
import Link from "next/link";

// const LogInForm = dynamic(() => import("@/pages/LogInForm/LogInForm"), {
//   ssr: false,
// });

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
    <div className={clsx(classes.block, register && classes.active)}>
      <div className={classes.block__mask}>
        <div className={classes.block__container}>
          {/* {register && classes.active ? (
          ) : (
          )} */}

          <LogInForm
            onClick={() => setRegister((register) => !register)}
            className={clsx(classes.block__item, classes.block__login)}
          />
          <SignUpForm
            className={clsx(classes.block__item, classes.block__signup)}
            onClick={() => setRegister((register) => !register)}
          />
          {/* <SignUpForm
            className={classes.block__item}
            onClick={() => setRegister((register) => !register)}
          /> */}
        </div>
        <Link href={"/"} className={classes.block__icon}>
          <svg>
            <use href={`${svgCheckmark}#icon`} />
          </svg>
        </Link>
        {/* <a href="#"> */}
        {/* <Image src={svgCheckmark} width={200} height={200} alt="svg" /> */}
        {/* </a> */}
        {/* <img  /> */}
        {/* <svg href={"/checkmark.svg"} width={100} height={100} alt="svg" /> */}
        {/* <svg href={`${svgCheckmark}#icon`}></svg> */}
      </div>
    </div>
  );
}
