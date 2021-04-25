import { useEffect, useState } from "react";

import firebase from "firebase";

import { LineChart } from "./ChartComponents/LineChart";
import { DataInfo } from "./DataInfo";
import { CardList } from "../components/CardList";

import styles from "../styles/components/NationalView.module.css";

export function StateView({ location }) {
  const [stateData, setStateData] = useState(null);

  const db = firebase.database();

  useEffect(() => {
    let ref = db.ref(`state-data/${location.toUpperCase()}`);

    ref.on("value", (snapshot) => {
      setStateData(snapshot.val());
    });

    return () => ref.off();
  }, [location]);

  if (!stateData) return <div>Loading...</div>;

  return (
    <>
      <DataInfo />
      <CardList
        dates={Object.values(stateData.date)}
        acc_cases={Object.values(stateData.accumulated_num_cases)}
        acc_deaths={Object.values(stateData.accumulated_num_deaths)}
        new_cases={Object.values(stateData.new_num_cases)}
        new_deaths={Object.values(stateData.new_num_deaths)}
      />
      <div className="container">
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Acumulados"}
              chart_colors={["#116ddd"]}
              series_name={"Casos Acumulados"}
              series_data={Object.values(stateData.accumulated_num_cases)}
              series_categories={Object.values(stateData.date)}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Acumulados"}
              chart_colors={["#6b7077"]}
              series_name={"Óbitos Acumulados"}
              series_data={Object.values(stateData.accumulated_num_deaths)}
              series_categories={Object.values(stateData.date)}
            />
          </div>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Novos (últimas 24h)"}
              chart_colors={["#116ddd"]}
              series_name={"Novos Casos"}
              series_data={Object.values(stateData.new_num_cases)}
              series_categories={Object.values(stateData.date)}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Novos (últimas 24h)"}
              chart_colors={["#6b7077"]}
              series_name={"Novos Óbitos"}
              series_data={Object.values(stateData.new_num_deaths)}
              series_categories={Object.values(stateData.date)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
