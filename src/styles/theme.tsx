import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#eeeeee",
    },
    secondary: {
      main: "#e0e0e0",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#616161",
    },
  },
});
