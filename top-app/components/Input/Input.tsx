import React, { JSX } from "react";
import { InputProps } from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.css";

export const Input = ({
  className,
  ref,
  ...props
}: InputProps & { ref?: React.Ref<HTMLInputElement> }): JSX.Element => {
  return <input className={cn(className, styles.input)} ref={ref} {...props} />;
};