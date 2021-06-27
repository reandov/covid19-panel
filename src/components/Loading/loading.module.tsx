import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    loading: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-2.9rem",
      marginLeft: "-2.9rem",
    },
  })
);
