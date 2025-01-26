import { Button } from "@/components/Button/Button";
import  Htag from "@/components/Htag/Htag";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary">Кнопка</Button>
      <Button appearence="ghost">Кнопка</Button>
    </>
  );
}
