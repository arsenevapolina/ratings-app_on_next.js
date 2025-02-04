import { Button } from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import P from "@/components/P/P";
import Rating from "@/components/Rating/Rating";
import Tag from "@/components/Tag/Tag";
import { withLayout } from "@/layout/Layout";
import { JSX, useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "@/interfaces/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearence="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearence="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="large">Большой</P>
      <P>Средний</P>
      <P size="small">Маленький</P>
      <Tag size="small">Ghost</Tag>
      <Tag size="medium" color="red">
        Red
      </Tag>
      <Tag size="small" color="green">
        Green
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      { firstCategory }
    );

    return {
      props: {
        menu,
        firstCategory,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        menu: [],
        firstCategory,
      },
    };
  }
};