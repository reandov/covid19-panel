// React - Next Importations
import Head from "next/head";

// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ViewManager } from "../components/ViewManager";
import { InfoPanel } from "../components/InfoPanel";

// Context Importations
import { LocationMenuProvider } from "../contexts/LocationMenuContext";

// Firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://covid19br-dashboard-default-rtdb.firebaseio.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function Home() {
  const database = firebase.database().ref("/daily-data");

  return (
    <div className="container">
      <>
        <Head>
          <title>COVID-19 Painel</title>
        </Head>
        <NavigationBar />

        {database.on("value", (snapshot) => {
          console.log(snapshot.val());
        })}

        <LocationMenuProvider>
          <InfoPanel />
          <ViewManager />
        </LocationMenuProvider>

        <Footer />
      </>
    </div>
  );
}
