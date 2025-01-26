import { Button } from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import P from "@/components/P/P";
import Tag from "@/components/Tag/Tag";
import { JSX, useState } from "react";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearence="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
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
