// Component Importations
import { NavigationBar } from "../components/NavigationBar";
import { SimpleView } from "../components/SimpleView";

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
            <SimpleView />
          </DataProvider>
        </ViewerSwitcherProvider>
      </>
    </div>
  );
}
