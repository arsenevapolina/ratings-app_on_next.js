import { Button } from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import P from "@/components/P/P";
import Tag from "@/components/Tag/Tag";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
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
    </>
  );
}
