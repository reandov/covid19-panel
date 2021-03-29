// React - Next Importations
import Head from "next/head";

// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ViewManager } from "../components/ViewManager";
import { InfoPanel } from "../components/InfoPanel";

// Context Importations
import { LocationMenuProvider } from "../contexts/LocationMenuContext";

export default function Home() {
  return (
    <div className="container">
      <>
        <Head>
          <title>COVID-19 Painel</title>
        </Head>

        <NavigationBar />

        <LocationMenuProvider>
          <InfoPanel />
          <ViewManager />
        </LocationMenuProvider>

        <Footer />
      </>
    </div>
  );
}
