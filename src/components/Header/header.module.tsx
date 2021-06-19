import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      // alignItems: "center",
    },
    icon: {
      width: "2.8rem",
      height: "2.8rem",
    },
    title: {
      flexGrow: 1,
      marginLeft: 12,
    },
  })
);
