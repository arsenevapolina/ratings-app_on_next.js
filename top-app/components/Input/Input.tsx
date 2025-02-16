import React, { JSX } from "react";
import { InputProps } from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.css";

export const Input = ({
  className,
  error,
  ref,
  ...props
}: InputProps & { ref?: React.Ref<HTMLInputElement> }): JSX.Element => {
  return (
    <div className={cn(styles.inputWrapper)}>
      <input
        className={cn(styles.input, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
