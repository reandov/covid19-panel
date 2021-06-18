import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
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
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#616161",
    },
  },
});
