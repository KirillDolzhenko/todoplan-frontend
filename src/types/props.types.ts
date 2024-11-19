import { ReactNode } from "react";

export interface IPropsClassName {
  className?: string;
}

export interface IPropsChildren extends IPropsClassName {
  children: ReactNode;
}

export interface IPropsInputForm extends IPropsClassName {
  placeholder?: string;
  error?: string;
  type?: "text" | "password",
  [key: string]: any;
}

export interface IPropsButton extends IPropsChildren {
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
  
  disabled?: boolean;

}

export interface IPropsForm extends IPropsClassName {
  onClick: () => void;
}

export interface IPropsMessage extends IPropsClassName {
  message?: string;
}

// export interface IPropsHomepage {
//   title: string;
// }
