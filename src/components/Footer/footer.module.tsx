import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    footer: {
      marginTop: "1rem",
      padding: "1rem",
      backgroundColor: "#424242",
      position: "relative",
      bottom: 0,
      left: 0,
      width: "100%",
      color: "white",
    },
    profile: {
      display: "flex",
      flexDirection: "column",
      ["@media (max-width: 960px)"]: {
        marginBottom: "1.5rem",
      },
    },
    container: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      ["@media (max-width: 960px)"]: {
        flexDirection: "column",
      },
    },
    source: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",

      img: {
        marginLeft: "10px",
      },
    },
  })
);
