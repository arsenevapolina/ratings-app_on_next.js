import { JSX } from "react";
import { withLayout } from "../layout/Layout";
import Htag from "@/components/Htag/Htag";

function Error500(): JSX.Element {
  return (
    <>
      <Htag tag="h1">ошибка 500</Htag>
    </>
  );
}

export default withLayout(Error500);
