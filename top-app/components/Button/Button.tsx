"use client";

import React, { JSX, useEffect } from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";
import { motion, useMotionValue } from "framer-motion";

export const Button = ({
  children,
  arrow = "none",
  appearence,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const scale = useMotionValue(1);

  useEffect(() => {
    scale.onChange(s => console.log(s));
  }, []);

  return (
    <motion.button
    whileHover={{ scale: 1.05 }}
      className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
      })}
      style={{ scale }}
      {...props}
    >
      {children}

      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <ArrowIcon />
        </span> 
      )}
    </motion.button>
  );
};
