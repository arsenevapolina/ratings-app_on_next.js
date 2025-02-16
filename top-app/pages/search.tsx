import { withLayout } from "@/layout/Layout";
import { JSX } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "@/interfaces/menu.interface";
import { API } from "@/helpers/api";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Search(): JSX.Element {

  return (
    <>
      Search
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find, 
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
