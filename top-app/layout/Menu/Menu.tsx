import React, { JSX, useContext } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "@/helpers/helpers";
import { AppContext } from "@/components/context/app.context";

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
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
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        href={`/${route}/${p.alias}`}
        key={p._id}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
        })}
      >
        {p.category}
      </Link>
    ));
  };
  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
