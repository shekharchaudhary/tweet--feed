import React from "react";
import { ButtonStyled } from "./button.style";

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  secondary?: boolean;
  block?: boolean;
  link?: boolean;
};

export const Button: React.FC<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = (props) => <ButtonStyled {...props} />;
