// React - Next Importations
import React from "react";

// Library Components
import { CircularProgress } from "@material-ui/core";

// Styles
import { useStyles } from "./loading.module";

export function Loading() {
  const classes = useStyles();

  return <CircularProgress className={classes.loading} size={70} />;
}
