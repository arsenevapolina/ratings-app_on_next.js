import { JSX } from "react";
import { withLayout } from "../layout/Layout";
import Htag from "@/components/Htag/Htag";

function Error404(): JSX.Element {
  return (
    <>
      <Htag tag="h1">ошибка 404</Htag>
    </>
  );
}

export default withLayout(Error404);
