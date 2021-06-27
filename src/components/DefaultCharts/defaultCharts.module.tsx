import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    chartContainer: {
      marginTop: 10,
    },
    chartAreaContainer: {
      display: "flex",
      flexDirection: "row",
      // width: "100%",
      ["@media (max-width: 960px)"]: {
        flexDirection: "column",
      },
    },
    chart: {
      width: "50%",
      margin: "5px",
      padding: "10px",
      ["@media (max-width: 960px)"]: {
        width: "100%",
      },
    },
  })
);
