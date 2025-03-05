import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { JSX } from "react";
import ym from "react-yandex-metrika";
import { YMInitializer } from "react-yandex-metrika";

export default function App({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  router.events.on("routeChangeComplete", (url: string) => {
    if (typeof window !== "undefined") {
      ym("hit", url);
    }
  });

  return (
    <>
      <Head>
        <title>Ratings-app</title>
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <meta
          property="ag:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="ag:locale" content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}
