// React - Next Importations
import React, { useEffect, useState } from "react";
import Head from "next/head";

// External Components
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// Internal Components
import { LocationPicker } from "../components/LocationPicker";

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
import { convertToReadableNumber } from "../utils/functions/functions";
import { ResumeCards } from "../components/ResumeCards";

export default function Home() {
  const classes = useStyles();

  const [nationalData, setNationalData] = useState<INationalData>(null);
  const [epiWeeksData, setEpiWeeksData] = useState<IDailyData>(null);
  const [dailyData, setDailyData] = useState<IEpidemiologicalData>(null);

  async function getDataFromDatabase() {
    await database.ref("national-data").once("value", (snapshot) => {
      setNationalData(snapshot.val());
    });
    await database.ref("epi-weeks-data").once("value", (snapshot) => {
      setEpiWeeksData(snapshot.val());
    });
    await database.ref("daily-data").once("value", (snapshot) => {
      setDailyData(snapshot.val());
    });
  }

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  return (
    <div className="container">
      <>
        <LocationPicker />
        <ResumeCards
          accumulated_cases={nationalData?.accumulated_num_cases}
          accumulated_deaths={nationalData?.accumulated_num_deaths}
          new_cases={nationalData?.new_num_cases}
          new_deaths={nationalData?.new_num_deaths}
        />
      </>
    </div>
  );
}
