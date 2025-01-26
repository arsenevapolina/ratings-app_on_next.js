import React from "react";
import { ParagraphProps } from "./P.props";
import cn from "classnames";
import styles from "./P.module.css";

const Paragraph = ({ size = "medium", children, ...props }: ParagraphProps) => {
  return (
    <p
      className={cn(styles.p, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
