import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      ["@media (max-width: 1150px)"]: {
        flexDirection: "column",
        gap: 15,
      },
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);
