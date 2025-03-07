import React, { JSX, useEffect, useState } from "react";
import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from "./Header.module.css";
import Logo from "../logo.svg";
import { ButtonIcon } from "@/ButtonIcon/ButtonIcon";
import { motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: "100%",
    },
  };
  return (
    <header className={cn(className, styles.header)} {...props}>
      <div className={styles.wrapper}>
        <Logo />
        <ButtonIcon
          appearence="white"
          icon="menu"
          onClick={() => setIsOpened(true)}
        />
      </div>
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearence="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
