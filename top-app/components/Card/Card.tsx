import React, { ForwardedRef, forwardRef } from "react";
import { CardProps } from "./Card.props";
import cn from "classnames";
import styles from "./Card.module.css";

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { color = "white", children, className, ...props },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === "blue",
      })}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
