// React - Next Importations
import React from "react";
import Head from "next/head";

// Library Components
import { AppBar, Toolbar, Typography } from "@material-ui/core";

// Styles
import { useStyles } from "./header.module";

export function Header() {
  const classes = useStyles();

  return (
    <div className="container">
      <>
        <Head>
          <title>COVID-19 Painel</title>
        </Head>

        <div>
          <AppBar position="static" elevation={2} className={classes.appbar}>
            <Toolbar>
              <img
                src="/icons/covid_icon.svg"
                alt="virus icon"
                className={classes.icon}
              />
              <Typography variant="h5" className={classes.title}>
                COVID-19 | Brasil
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </>
    </div>
  );
}
