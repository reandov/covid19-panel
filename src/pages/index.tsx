// React - Next Importations
import React, { useEffect, useState } from "react";
import Head from "next/head";

// External Components
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// Internal Components
import { Loading } from "../components/Loading";
import { LocationPicker } from "../components/LocationPicker";
import { LineChart } from "../components/Charts/LineChart/LineChart";

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
import { ResumeCards } from "../components/ResumeCards";
import { DefaultCharts } from "../components/DefaultCharts";

export default function Home() {
  const classes = useStyles();

  const [nationalData, setNationalData] = useState<INationalData>(null);
  const [epiWeeksData, setEpiWeeksData] = useState<IDailyData>(null);
  const [dailyData, setDailyData] = useState<IEpidemiologicalData>(null);

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
          </>
        )}
      </>
    </div>
  );
}
