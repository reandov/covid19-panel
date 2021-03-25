import { LineChart } from "./ChartComponents/LineChart";
import { BarChart } from "./ChartComponents/BarChart";
import { CardList } from "../components/CardList";

import * as national_data from "../../data/national_data.json";
import * as epi_weeks_data from "../../data/epi_weeks_data.json";
import * as daily_data from "../../data/daily_data.json";

import styles from "../styles/components/NationalView.module.css";

export function NationalView() {
  // Loading National Data
  const dates = Object.values(national_data.date);
  const national_acc_cases = Object.values(national_data.accumulated_num_cases);
  const national_acc_deaths = Object.values(
    national_data.accumulated_num_cases
  );
  const national_new_cases = Object.values(national_data.new_num_cases);
  const national_new_deaths = Object.values(national_data.new_num_deaths);

  // Loading Epidemiological Weeks Data
  const epi_week_labels = Object.values(epi_weeks_data.epidemiological_week);
  const epi_week_new_cases = Object.values(epi_weeks_data.new_cases);
  const epi_week_new_deaths = Object.values(epi_weeks_data.new_deaths);

  // Loading Daily Data
  const state = Object.values(daily_data.state);
  const daily_acc_cases = Object.values(daily_data.accumulated_cases);
  const daily_acc_deaths = Object.values(daily_data.accumulated_deaths);
  const daily_new_cases = Object.values(daily_data.new_cases);
  const daily_new_deaths = Object.values(daily_data.new_deaths);

  return (
    <>
      <CardList
        dates={dates}
        acc_cases={national_acc_cases}
        acc_deaths={national_acc_deaths}
        new_cases={national_new_cases}
        new_deaths={national_new_deaths}
      />
      <div className="container">
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Acumulados"}
              chart_colors={["#ffc107", "#ffab00"]}
              series_name={"Casos Acumulados"}
              series_data={national_acc_cases}
              series_categories={dates}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Acumulados"}
              chart_colors={["#e53935", "#c72407"]}
              series_name={"Óbitos Acumulados"}
              series_data={national_acc_deaths}
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
              series_data={national_new_cases}
              series_categories={dates}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Novos (últimas 24h)"}
              chart_colors={["#ed0707", "#cc0606"]}
              series_name={"Novos Óbitos"}
              series_data={national_new_deaths}
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
              series_data={daily_acc_cases}
              series_categories={state}
            />
          </div>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Óbitos Acumulados p/ Estado"}
              chart_colors={["#ed0707", "#cc0606"]}
              series_name={"Óbitos Acumulados"}
              series_data={daily_acc_deaths}
              series_categories={state}
            />
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Casos Novos (últimas 24h) p/ Estado"}
              chart_colors={["#f7b707", "#e0a607"]}
              series_name={"Casos Novos"}
              series_data={daily_new_cases}
              series_categories={state}
            />
          </div>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Óbitos Novos (últimas 24h) p/ Estado"}
              chart_colors={["#ed0707", "#cc0606"]}
              series_name={"Óbitos Novos"}
              series_data={daily_new_deaths}
              series_categories={state}
            />
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Casos Novos (por Semana Epidemiológica)"}
              chart_colors={["#f7b707", "#e0a607"]}
              series_name={"Casos Novos"}
              series_data={epi_week_new_cases}
              series_categories={epi_week_labels}
            />
          </div>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Óbitos Novos (por Semana Epidemiológica)"}
              chart_colors={["#ed0707", "#cc0606"]}
              series_name={"Óbitos Novos"}
              series_data={epi_week_new_deaths}
              series_categories={epi_week_labels}
            />
          </div>
        </div>
      </div>
    </>
  );
}
