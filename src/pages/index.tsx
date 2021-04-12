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
  apiKey: "AIzaSyARAjzGIsOP6rk4MEBdBmGRd9K1YAA7HIg",
  authDomain: "covid19br-dashboard.firebaseapp.com",
  databaseURL: "https://covid19br-dashboard-default-rtdb.firebaseio.com",
  projectId: "covid19br-dashboard",
  storageBucket: "covid19br-dashboard.appspot.com",
  messagingSenderId: "1024834188542",
  appId: "1:1024834188542:web:edb9a82cf81376273021af",
  measurementId: "G-VK52LZ0NFX",
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
