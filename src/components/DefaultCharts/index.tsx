// React - Next Importations
import React from "react";

// Library Components
import { CircularProgress, Container, Paper } from "@material-ui/core";

// External Components
import { LineChart } from "../Charts/LineChart/LineChart";

// Styles
import { useStyles } from "./defaultCharts.module";
import { IDefaultChartData } from "../../utils/types/types";

export function DefaultCharts({
  accumulated_cases,
  accumulated_deaths,
  new_cases,
  new_deaths,
  date,
}: IDefaultChartData) {
  const classes = useStyles();

  return (
    <Container maxWidth={"xl"} className={classes.chartContainer}>
      <Container maxWidth={"xl"} className={classes.chartAreaContainer}>
        <Paper className={classes.chart}>
          <LineChart
            chartTitle="Casos Acumulados"
            chartColors={["#116ddd"]}
            seriesName="Casos Acumulados"
            seriesData={accumulated_cases}
            seriesCategories={date}
          />
        </Paper>
        <Paper className={classes.chart}>
          <LineChart
            chartTitle="Óbitos Acumulados"
            chartColors={["#6b7077"]}
            seriesName="Óbitos Acumulados"
            seriesData={accumulated_deaths}
            seriesCategories={date}
          />
        </Paper>
      </Container>

      <Container maxWidth={"xl"} className={classes.chartAreaContainer}>
        <Paper className={classes.chart}>
          <LineChart
            chartTitle="Novos Casos | 24h"
            chartColors={["#116ddd"]}
            seriesName="Novos Casos | 24h"
            seriesData={new_cases}
            seriesCategories={date}
          />
        </Paper>
        <Paper className={classes.chart}>
          <LineChart
            chartTitle="Novos Óbitos | 24h"
            chartColors={["#6b7077"]}
            seriesName="Novos Óbitos | 24h"
            seriesData={new_deaths}
            seriesCategories={date}
          />
        </Paper>
      </Container>
    </Container>
  );
}
