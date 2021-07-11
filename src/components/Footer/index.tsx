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
import { useStyles } from "./footer.module";

export function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.profile}>
          <p>
            Painel desenvolvido por{" "}
            <strong>
              <a href="https://www.linkedin.com/in/evnrodr/">
                Evandro Rodrigues
              </a>
            </strong>
            .
          </p>
          <p>
            <a href="https://github.com/evnrodr/covid19-panel">
              Link para o repositório no <strong>GitHub</strong>.
            </a>
          </p>
        </div>

        <p className={classes.source}>
          Fonte dos dados:{" "}
          <a href="https://brasil.io/covid19/">
            <img
              src="https://brasil.io/static/img/logo/logo_br-io_fundo-escuro.bbbaf8e79edf.png"
              alt=""
              width="210px"
              height="40.5"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
