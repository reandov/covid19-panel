// React - Next Importations
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// External Components

// Internal Components
import { Loading } from "../../components/Loading";
import { ResumeCards } from "../../components/ResumeCards";
import { DefaultCharts } from "../../components/DefaultCharts";
import { Footer } from "../../components/Footer";

// Services
import { database } from "../../services/firebase";

// Types
import { IStateData } from "../../utils/types/types";

// Styles

export default function State() {
  const router = useRouter();

  const { state } = router.query;
  const [stateData, setStateData] = useState<IStateData>(null);

  const [loading, setLoading] = useState(true);

  async function getDataFromDatabase() {
    setLoading(true);
    console.log("AQUIIIIIIIIII:", state);

    await database.ref(`state-data/${state}`).once("value", (snapshot) => {
      setStateData(snapshot.val() as IStateData);
    });
    setLoading(false);
  }

  useEffect(() => {
    console.log(router.query);

    getDataFromDatabase();
  }, [state]);

  return (
    <div className="container">
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <ResumeCards
              accumulated_cases={stateData?.accumulated_num_cases}
              accumulated_deaths={stateData?.accumulated_num_deaths}
              new_cases={stateData?.new_num_cases}
              new_deaths={stateData?.new_num_deaths}
            />
            <DefaultCharts
              accumulated_cases={stateData?.accumulated_num_cases}
              accumulated_deaths={stateData?.accumulated_num_deaths}
              new_cases={stateData?.new_num_cases}
              new_deaths={stateData?.new_num_deaths}
              date={stateData?.date}
            />
            <Footer />
          </>
        )}
      </>
    </div>
  );
}
