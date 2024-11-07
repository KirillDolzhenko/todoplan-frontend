import { ReactNode } from "react";

export interface IPropsClassName {
  className?: string;
}

export interface IPropsChildren extends IPropsClassName {
  children: ReactNode;
}

export interface IPropsInputForm extends IPropsClassName {
  placeholder?: string;
}

export interface IPropsButton extends IPropsChildren {
  onClick?: () => void;
}

export interface IPropsForm extends IPropsClassName {
  onClick?: () => void;
}

// export interface IPropsHomepage {
//   title: string;
// }
