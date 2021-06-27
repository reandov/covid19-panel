// React - Next Importations
import React from "react";

// Library Components
import {
  Container,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";

// Functions
import { convertToReadableNumber } from "../../utils/functions/functions";

// Types
import { ICardData } from "../../utils/types/types";

// Styles
import { useStyles } from "./resumeCards.module";

export function ResumeCards({
  accumulated_cases,
  accumulated_deaths,
  new_cases,
  new_deaths,
}: ICardData) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            CASOS ACUMULADOS
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h4">
            {convertToReadableNumber(accumulated_cases?.slice(-1)[0])}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            ÓBITOS ACUMULADOS
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h4">
            {convertToReadableNumber(accumulated_deaths?.slice(-1)[0])}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            NOVOS CASOS | 24H
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h4">
            {convertToReadableNumber(new_cases?.slice(-1)[0])}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            NOVOS ÓBITOS | 24H
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h4">
            {convertToReadableNumber(new_deaths?.slice(-1)[0])}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
