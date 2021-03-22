import { useContext } from "react";

import { LineChart } from "./ChartComponents/LineChart";

import { DataContext } from "../contexts/DataContext";

import styles from "../styles/components/SimpleView.module.css";

export function SimpleView() {
  var { dates, acc_cases, acc_deaths, new_cases, new_deaths } = useContext(
    DataContext
  );

  return (
    <div className="container">
      <div className={styles.chartContainer}>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Casos Acumulados"}
            chart_colors={["#ffc107", "#ffab00"]}
            series_name={"Casos Acumulados"}
            series_data={acc_cases}
            series_dates={dates}
          />
        </div>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Óbitos Acumulados"}
            chart_colors={["#e53935", "#c72407"]}
            series_name={"Óbitos Acumulados"}
            series_data={acc_deaths}
            series_dates={dates}
          />
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Casos Novos (últimas 24hr)"}
            chart_colors={["#f7b707", "#e0a607"]}
            series_name={"Novos Casos"}
            series_data={new_cases}
            series_dates={dates}
          />
        </div>
        <div className={styles.chartArea}>
          <LineChart
            chart_title={"Óbitos Novos (últimas 24hr)"}
            chart_colors={["#ed0707", "#cc0606"]}
            series_name={"Novos Óbitos"}
            series_data={new_deaths}
            series_dates={dates}
          />
        </div>
      </div>
    </div>
  );
}
