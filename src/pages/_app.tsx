import { ThemeProvider } from "@material-ui/core";

import { Header } from "../components/Header";

import { lightTheme, darkTheme } from "../styles/theme";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
