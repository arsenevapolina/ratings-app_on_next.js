import React, { JSX, useContext } from "react";
import { AppContext } from "@/components/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import { TopLevelCategory } from "@/interfaces/page.interface";
import cn from "classnames";
import styles from "./Menu.module.css";
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, firstCategory } = useContext(AppContext);

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
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        href={`/${route}/${p.alias}`}
        key={p.alias}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </Link>
    ));
  };
  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
