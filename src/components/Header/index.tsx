// React - Next Importations
import React from "react";
import Head from "next/head";

// Library Components
import {
  AppBar,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Brightness2, Brightness7 } from "@material-ui/icons";

// Styles
import { useStyles } from "./header.module";

interface IThemeProps {
  currentTheme: Theme;
  handleThemeChange: () => void;
}

export function Header({ currentTheme, handleThemeChange }: IThemeProps) {
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
              <IconButton
                onClick={() => {
                  handleThemeChange();
                }}
              >
                {currentTheme.palette.type === "light" ? (
                  <Brightness2 />
                ) : (
                  <Brightness7 />
                )}
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </>
    </div>
  );
}
