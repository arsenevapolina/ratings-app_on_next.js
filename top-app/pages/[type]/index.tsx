import { withLayout } from "@/layout/Layout";
import { JSX } from "react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { MenuItem } from "@/interfaces/menu.interface";
import { firstLevelMenu } from "@/helpers/helpers";
import { API } from "@/helpers/api";

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Type({ firstCategory }: TypeProps): JSX.Element {
  return <>Type: {firstCategory}</>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => "/" + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      API.topPage.find,
      { firstCategory: firstCategoryItem.id }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        menu: [],
        firstCategory: firstCategoryItem.id,
      },
    };
  }
};
