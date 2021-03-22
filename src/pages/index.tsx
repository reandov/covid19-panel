// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";
import { ViewManager } from "../components/ViewManager";

// Contexts Importations
import { ViewerSwitcherProvider } from "../contexts/ViewerSwitcherContext";
import { DataProvider } from "../contexts/DataContext";

export default function Home() {
  return (
    <div className="container">
      <>
        <ViewerSwitcherProvider>
          <NavigationBar />
          <DataProvider>
            <ViewManager />
          </DataProvider>
          <Footer />
        </ViewerSwitcherProvider>
      </>
    </div>
  );
}
