import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { Header } from "../components/Header";

import "../styles/global.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#eeeeee",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
