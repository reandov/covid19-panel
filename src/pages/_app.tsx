import React, { useContext, useState } from "react";
import { Theme, ThemeProvider } from "@material-ui/core";

import { Header } from "../components/Header";

import { lightTheme, darkTheme } from "../styles/theme";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

  function handleThemeChange() {
    currentTheme === lightTheme
      ? setCurrentTheme(darkTheme)
      : setCurrentTheme(lightTheme);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <main>
        <Header
          handleThemeChange={handleThemeChange}
          currentTheme={currentTheme}
        />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
