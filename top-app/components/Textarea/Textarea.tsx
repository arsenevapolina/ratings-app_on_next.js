import React, { JSX } from "react";
import { TextareaProps } from "./Textarea.props";
import cn from "classnames";
import styles from "./Textarea.module.css";

export const Textarea = ({
  className,
  ref,
  ...props
}: TextareaProps & { ref?: React.Ref<HTMLTextAreaElement> }): JSX.Element => {
  return (
    <textarea className={cn(className, styles.textarea)} ref={ref} {...props} />
  );
};