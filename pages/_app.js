import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Roundin</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="res/ico/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
