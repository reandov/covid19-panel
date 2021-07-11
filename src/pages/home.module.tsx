import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: 12,
    },
    chartContainer: {
      marginTop: 10,
      padding: 15,
    },
    chartAreaContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      ["@media (max-width: 960px)"]: {
        flexDirection: "column",
      },
    },
    chart: {
      width: "50%",
      padding: 5,
      ["@media (max-width: 960px)"]: {
        width: "100%",
      },
    },
    innerChart: {
      padding: 5,
    },
  })
);
