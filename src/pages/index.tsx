// React - Next Importations
import Head from "next/head";

// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { PanelManager } from "../components/PanelManager";
import { HeaderPanel } from "../components/HeaderPanel";

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
          <HeaderPanel />
          <PanelManager />
        </LocationMenuProvider>

        <Footer />
      </>
    </div>
  );
}
