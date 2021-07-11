import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      gap: 15,
      justifyContent: "space-around",
      ["@media (max-width: 1150px)"]: {
        flexDirection: "column",
        gap: 15,
      },
    },
    cardContainer: {
      width: "30%",
      ["@media (max-width: 1150px)"]: {
        width: "100%",
      },
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);
