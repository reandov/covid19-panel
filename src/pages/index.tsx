// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { Card } from "../components/Card";
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
          <Card />
          <DataProvider>
            <ViewManager />
          </DataProvider>
        </ViewerSwitcherProvider>
      </>
    </div>
  );
}
