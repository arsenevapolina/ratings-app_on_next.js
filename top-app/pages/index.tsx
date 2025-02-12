import { withLayout } from "@/layout/Layout";
import { JSX } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "@/interfaces/menu.interface";
import { Input, Textarea } from "@/components";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Home({}: HomeProps): JSX.Element {
  return (
    <>
      <Input placeholder="тест" />
      <Textarea placeholder="тест area" />
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
