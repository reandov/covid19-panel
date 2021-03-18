import { NavigationBar } from "../components/NavigationBar";
import { LineChart } from "../components/LineChart";

import styles from "../styles/pages/Home.module.css";

import * as covid_data from "../../data/test_data.json";

export default function Home() {
  var dates = Object.values(covid_data.date);
  var acc_cases = Object.values(covid_data.accumulated_num_cases);
  var acc_deaths = Object.values(covid_data.accumulated_num_deaths);
  var new_cases = Object.values(covid_data.new_num_cases);
  var new_deaths = Object.values(covid_data.new_num_deaths);

  return (
    <div className="container">
      <>
        <NavigationBar />
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Acumulados"}
              chart_colors={["#f7b707", "#e0a607"]}
              series_name={"Casos Acumulados"}
              series_data={acc_cases}
              series_dates={dates}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Acumulados"}
              chart_colors={["#ed0707", "#cc0606"]}
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
      </>
    </div>
  );
}
