import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IPropsClassName {
  className?: string;
}

export interface IPropsChildren extends IPropsClassName {
  children: ReactNode;
}

export interface IPropsInputForm extends IPropsClassName {
  placeholder?: string;
  error?: string;
  [key: string]: any;
}

export interface IPropsButton extends IPropsChildren {
  onClick?: () => void;
  type?: "button" | "submit";
}

export interface IPropsForm extends IPropsClassName {
  onClick?: () => void;
}

export interface IPropsMessage extends IPropsClassName {
  message?: string;
}

// export interface IPropsHomepage {
//   title: string;
// }
