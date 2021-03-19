import { NavigationBar } from "../components/NavigationBar";
import { SimpleModeView } from "../components/SimpleModeView";
import { ExpandedViewSwitch } from "../components/ExpandedViewSwitch";

import { useContext } from "react";
import { ExpandedViewProvider } from "../contexts/ExpandedViewContext";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <>
        <NavigationBar />
        <SimpleModeView />
        <ExpandedViewProvider>
          <ExpandedViewSwitch />
        </ExpandedViewProvider>
      </>
    </div>
  );
}
