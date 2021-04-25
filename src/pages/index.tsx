// React - Next Importations
import Head from "next/head";

// Firebase
import firebase from "firebase";

// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { Header } from "../components/Header";
import { PanelManager } from "../components/PanelManager";
import { Footer } from "../components/Footer";

// Context Importations
import { LocationMenuProvider } from "../contexts/LocationMenuContext";

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://covid19br-panel-default-rtdb.firebaseio.com",
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
  return (
    <div className="container">
      <>
        <Head>
          <title>COVID-19 Painel</title>
        </Head>

        <NavigationBar />

        <LocationMenuProvider>
          <Header />
          <PanelManager />
        </LocationMenuProvider>

        <Footer />
      </>
    </div>
  );
}
