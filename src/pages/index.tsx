// React - Next Importations
import React, { useEffect, useState } from "react";
import Head from "next/head";

// External Components
import { Paper } from "@material-ui/core";

// Internal Components
import { Loading } from "../components/Loading";
import { LocationPicker } from "../components/LocationPicker";
import { BarChart } from "../components/Charts/BarChart/BarChart";
import { ResumeCards } from "../components/ResumeCards";
import { DefaultCharts } from "../components/DefaultCharts";
import { Footer } from "../components/Footer";

// Services
import { database } from "../services/firebase";

// Types
import {
  INationalData,
  IDailyData,
  IEpidemiologicalData,
} from "../utils/types/types";

// Styles
import { useStyles } from "./home.module";

export default function Home(props) {
  const classes = useStyles();

  const [nationalData, setNationalData] = useState<INationalData>(null);
  const [epiWeeksData, setEpiWeeksData] = useState<IEpidemiologicalData>(null);
  const [dailyData, setDailyData] = useState<IDailyData>(null);

  const [loading, setLoading] = useState(false);

  async function getDataFromDatabase() {
    setLoading(true);
    await database.ref("national-data").once("value", (snapshot) => {
      setNationalData(snapshot.val());
    });
    await database.ref("epi-weeks-data").once("value", (snapshot) => {
      setEpiWeeksData(snapshot.val());
    });
    await database.ref("daily-data").once("value", (snapshot) => {
      setDailyData(snapshot.val());
    });
    setLoading(false);
  }

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  return (
    <div className="container">
      <>
        <LocationPicker />
        {loading ? (
          <Loading />
        ) : (
          <>
            <ResumeCards
              accumulated_cases={nationalData?.accumulated_num_cases}
              accumulated_deaths={nationalData?.accumulated_num_deaths}
              new_cases={nationalData?.new_num_cases}
              new_deaths={nationalData?.new_num_deaths}
            />
            <DefaultCharts
              accumulated_cases={nationalData?.accumulated_num_cases}
              accumulated_deaths={nationalData?.accumulated_num_deaths}
              new_cases={nationalData?.new_num_cases}
              new_deaths={nationalData?.new_num_deaths}
              date={nationalData?.date}
            />
            <div className={classes.chartContainer}>
              <div className={classes.chartAreaContainer}>
                <div className={classes.chart}>
                  <Paper className={classes.innerChart}>
                    <BarChart
                      chartTitle="Casos Acumulados p/ Estado"
                      chartColors={["#116ddd"]}
                      seriesName="Casos Acumulados p/ Estado"
                      seriesData={dailyData?.accumulated_cases}
                      seriesCategories={dailyData?.state}
                    />
                  </Paper>
                </div>
                <div className={classes.chart}>
                  <Paper className={classes.innerChart}>
                    <BarChart
                      chartTitle="Óbitos Acumulados p/ Estado"
                      chartColors={["#6b7077"]}
                      seriesName="Óbitos Acumulados p/ Estado"
                      seriesData={dailyData?.accumulated_deaths}
                      seriesCategories={dailyData?.state}
                    />
                  </Paper>
                </div>
              </div>
              <div className={classes.chartAreaContainer}>
                <div className={classes.chart}>
                  <Paper className={classes.innerChart}>
                    <BarChart
                      chartTitle="Novos Casos p/ Estado"
                      chartColors={["#116ddd"]}
                      seriesName="Novos Casos p/ Estado"
                      seriesData={dailyData?.new_cases}
                      seriesCategories={dailyData?.state}
                    />
                  </Paper>
                </div>
                <div className={classes.chart}>
                  <Paper className={classes.innerChart}>
                    <BarChart
                      chartTitle="Novos Óbitos p/ Estado"
                      chartColors={["#6b7077"]}
                      seriesName="Novos Óbitos p/ Estado"
                      seriesData={dailyData?.new_deaths}
                      seriesCategories={dailyData?.state}
                    />
                  </Paper>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </>
    </div>
  );
}

// export async function getStaticProps() {
//   const nationalData = await database
//     .ref("national-data")
//     .once("value", (snapshot) => {
//       return snapshot.val();
//     });
//   const epiWeeksData = await database
//     .ref("epi-weeks-data")
//     .once("value", (snapshot) => {
//       return snapshot.val();
//     });
//   const dailyData = await database
//     .ref("daily-data")
//     .once("value", (snapshot) => {
//       return snapshot.val();
//     });

//   return {
//     props: {
//       nationalData: nationalData.toJSON(),
//       epiWeeksData: epiWeeksData.toJSON(),
//       dailyData: dailyData.toJSON(),
//     },
//     revalidate: 60 * 60 * 10.15,
//   };
// }
