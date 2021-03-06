import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "src/theme/muiTheme";
import createEmotionCache from "src/theme/muiEmotion";
import { RecoilRoot } from "recoil";
import Navigator from "src/navigators/Navigator";
import "./index.css";
import "swiper/scss";

const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>Roundin</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      {/* <CssBaseline /> */}
      <ThemeProvider theme={muiTheme}>
        <RecoilRoot>
          <Navigator />
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default App;
