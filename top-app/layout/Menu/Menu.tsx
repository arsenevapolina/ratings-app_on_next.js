import React, { JSX, useContext } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";
import { AppContext } from "@/components/context/app.context";
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: { marginButtom: 0 }
  }

  const variantsChildren = {
    visible: {
     opacity: 1,
     height: 29
    },
    hidden: { opacity: 0, height: 0 },
  };

  const openSecondLevel = (secondCategory: string) => {
    if (setMenu) {
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link
              href={`/${m.route}`}
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
        <Link
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
          })}
        >
          {p.category}
        </Link>
      </motion.div>
    ));
  };
  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
