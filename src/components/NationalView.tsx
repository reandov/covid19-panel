import { useEffect, useState } from "react";

import firebase from "firebase";

import { LineChart } from "./ChartComponents/LineChart";
import { BarChart } from "./ChartComponents/BarChart";
import { DataInfo } from "./DataInfo";
import { CardList } from "../components/CardList";

import styles from "../styles/components/NationalView.module.css";

export function NationalView() {
  const [nationalData, setNationalData] = useState(null);
  const [epiWeeksData, setEpiWeeksData] = useState(null);
  const [dailyData, setDailyData] = useState(null);

  const db = firebase.database();

  useEffect(() => {
    let ref = db.ref("national-data");

    ref.once("value", (snapshot) => {
      setNationalData(snapshot.val());
    });

    ref = db.ref("epi-weeks-data");

    ref.once("value", (snapshot) => {
      setEpiWeeksData(snapshot.val());
    });

    ref = db.ref("daily-data");

    ref.once("value", (snapshot) => {
      setDailyData(snapshot.val());
    });

    return () => ref.off();
  }, []);

  if (!dailyData) return <div>Loading...</div>;

  return (
    <>
      <DataInfo />
      <CardList
        dates={nationalData.date}
        acc_cases={nationalData.accumulated_num_cases}
        acc_deaths={nationalData.accumulated_num_deaths}
        new_cases={nationalData.new_num_cases}
        new_deaths={nationalData.new_num_cases}
      />
      <div className="container">
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Acumulados"}
              chart_colors={["#116ddd"]}
              series_name={"Casos Acumulados"}
              series_data={nationalData.accumulated_num_cases}
              series_categories={nationalData.date}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Acumulados"}
              chart_colors={["#6b7077"]}
              series_name={"Óbitos Acumulados"}
              series_data={nationalData.accumulated_num_deaths}
              series_categories={nationalData.date}
            />
          </div>
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Casos Novos (últimas 24h)"}
              chart_colors={["#116ddd"]}
              series_name={"Novos Casos"}
              series_data={nationalData.new_num_cases}
              series_categories={nationalData.date}
            />
          </div>
          <div className={styles.chartArea}>
            <LineChart
              chart_title={"Óbitos Novos (últimas 24h)"}
              chart_colors={["#6b7077"]}
              series_name={"Novos Óbitos"}
              series_data={nationalData.new_num_deaths}
              series_categories={nationalData.date}
            />
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Casos Acumulados p/ Estado"}
              chart_colors={["#116ddd"]}
              series_name={"Casos Acumulados"}
              series_data={dailyData.accumulated_cases}
              series_categories={dailyData.state}
            />
          </div>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Óbitos Acumulados p/ Estado"}
              chart_colors={["#6b7077"]}
              series_name={"Óbitos Acumulados"}
              series_data={dailyData.accumulated_deaths}
              series_categories={dailyData.state}
            />
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Casos Novos (últimas 24h) p/ Estado"}
              chart_colors={["#116ddd"]}
              series_name={"Casos Novos"}
              series_data={dailyData.new_cases}
              series_categories={dailyData.state}
            />
          </div>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Óbitos Novos (últimas 24h) p/ Estado"}
              chart_colors={["#6b7077"]}
              series_name={"Óbitos Novos"}
              series_data={dailyData.new_deaths}
              series_categories={dailyData.state}
            />
          </div>
        </div>

        <div className={styles.chartContainer}>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Casos Novos (por Semana Epidemiológica)"}
              chart_colors={["#116ddd"]}
              series_name={"Casos Novos"}
              series_data={epiWeeksData.new_cases}
              series_categories={epiWeeksData.epidemiological_week}
            />
          </div>
          <div className={styles.chartArea}>
            <BarChart
              chart_title={"Óbitos Novos (por Semana Epidemiológica)"}
              chart_colors={["#6b7077"]}
              series_name={"Óbitos Novos"}
              series_data={epiWeeksData.new_deaths}
              series_categories={epiWeeksData.epidemiological_week}
            />
          </div>
        </div>
      </div>
    </>
  );
}
