import MainLayout from "@/layouts/mainLayout";
import Head from "next/head";

import Product from "./products";

export default function Home({ allProducts }) {
  return (
    <>
      <Head>
        <title>E-Commerce Site</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Product allProducts={allProducts} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://cow-hut-ten.vercel.app/api/v1/cows");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
