import { useContext } from "react";

import { LineChart } from "./ChartComponents/LineChart";
import { BarChart } from "./ChartComponents/BarChart";

import { DataContext } from "../contexts/DataContext";

import styles from "../styles/components/SimpleView.module.css";

export function SimpleView() {
  var {
    dates,
    states,
    epi_weeks_labels,
    acc_cases,
    acc_deaths,
    new_cases,
    new_deaths,
    epi_weeks_ncases,
    epi_weeks_ndeaths,
    daily_state_acc_cases,
    daily_state_acc_deaths,
    daily_state_new_cases,
    daily_state_new_deaths,
  } = useContext(DataContext);

  return (
    <div className="container">
      <div className={styles.chartContainer}>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Casos Acumulados"}
            chart_colors={["#ffc107", "#ffab00"]}
            series_name={"Casos Acumulados"}
            series_data={acc_cases}
            series_categories={dates}
          />
        </div>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Óbitos Acumulados"}
            chart_colors={["#e53935", "#c72407"]}
            series_name={"Óbitos Acumulados"}
            series_data={acc_deaths}
            series_categories={dates}
          />
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Casos Novos (últimas 24h)"}
            chart_colors={["#f7b707", "#e0a607"]}
            series_name={"Novos Casos"}
            series_data={new_cases}
            series_categories={dates}
          />
        </div>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Óbitos Novos (últimas 24h)"}
            chart_colors={["#ed0707", "#cc0606"]}
            series_name={"Novos Óbitos"}
            series_data={new_deaths}
            series_categories={dates}
          />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chartArea}>
          <BarChart
            chart_title={"Casos Acumulados p/ Estado"}
            chart_colors={["#f7b707", "#e0a607"]}
            series_name={"Casos Acumulados"}
            series_data={daily_state_acc_cases}
            series_categories={states}
          />
        </div>
        <div className={styles.chartArea}>
          <BarChart
            chart_title={"Óbitos Acumulados p/ Estado"}
            chart_colors={["#ed0707", "#cc0606"]}
            series_name={"Óbitos Acumulados"}
            series_data={daily_state_acc_deaths}
            series_categories={states}
          />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chartArea}>
          <BarChart
            chart_title={"Casos Novos (últimas 24h) p/ Estado"}
            chart_colors={["#f7b707", "#e0a607"]}
            series_name={"Casos Novos"}
            series_data={daily_state_new_cases}
            series_categories={states}
          />
        </div>
        <div className={styles.chartArea}>
          <BarChart
            chart_title={"Óbitos Novos (últimas 24h) p/ Estado"}
            chart_colors={["#ed0707", "#cc0606"]}
            series_name={"Óbitos Novos"}
            series_data={daily_state_new_deaths}
            series_categories={states}
          />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chartArea}>
          <BarChart
            chart_title={"Casos Novos (por Semana Epidemiológica)"}
            chart_colors={["#f7b707", "#e0a607"]}
            series_name={"Casos Novos"}
            series_data={epi_weeks_ncases}
            series_categories={epi_weeks_labels}
          />
        </div>
        <div className={styles.chartArea}>
          <BarChart
            chart_title={"Óbitos Novos (por Semana Epidemiológica)"}
            chart_colors={["#ed0707", "#cc0606"]}
            series_name={"Óbitos Novos"}
            series_data={epi_weeks_ndeaths}
            series_categories={epi_weeks_labels}
          />
        </div>
      </div>
    </div>
  );
}
