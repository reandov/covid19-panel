// React - Next Importations
import React, { useState } from "react";

// External Components
import { Theme, ThemeProvider, CssBaseline } from "@material-ui/core";

// Project Components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Styles
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
      <CssBaseline />
      <Header
        handleThemeChange={handleThemeChange}
        currentTheme={currentTheme}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
