import { LineChart } from "./ChartComponents/LineChart";
import { CardList } from "../components/CardList";

import styles from "../styles/components/NationalView.module.css";

export function StateView({ location }) {
  const state = require(`../../data/state_${location}_data.json`);

  return (
    <>
      <CardList
        dates={Object.values(state.date)}
        acc_cases={Object.values(state.accumulated_num_cases)}
        acc_deaths={Object.values(state.accumulated_num_deaths)}
        new_cases={Object.values(state.new_num_cases)}
        new_deaths={Object.values(state.new_num_deaths)}
      />
      <div className="container">
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Acumulados"}
              chart_colors={["#ffc107", "#ffab00"]}
              series_name={"Casos Acumulados"}
              series_data={Object.values(state.accumulated_num_cases)}
              series_categories={Object.values(state.date)}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Acumulados"}
              chart_colors={["#e53935", "#c72407"]}
              series_name={"Óbitos Acumulados"}
              series_data={Object.values(state.accumulated_num_deaths)}
              series_categories={Object.values(state.date)}
            />
          </div>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Novos (últimas 24h)"}
              chart_colors={["#f7b707", "#e0a607"]}
              series_name={"Novos Casos"}
              series_data={Object.values(state.new_num_cases)}
              series_categories={Object.values(state.date)}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Novos (últimas 24h)"}
              chart_colors={["#ed0707", "#cc0606"]}
              series_name={"Novos Óbitos"}
              series_data={Object.values(state.new_num_deaths)}
              series_categories={Object.values(state.date)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
