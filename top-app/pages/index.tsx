import { Button } from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import P from "@/components/P/P";
import Rating from "@/components/Rating/Rating";
import Tag from "@/components/Tag/Tag";
import { Layout } from "@/layout/Layout";
import { JSX, useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
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
    </Layout>
  );
}
