// React - Next Importations
import Head from "next/head";

// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { Header } from "../components/Header";
import { PanelManager } from "../components/PanelManager";
import { Footer } from "../components/Footer";

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
          <Header />
          <PanelManager />
        </LocationMenuProvider>

        <Footer />
      </>
    </div>
  );
}
