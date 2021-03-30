import { InfoCard } from "./InfoCard";
import { LocationPicker } from "./LocationPicker";

import styles from "../styles/components/InfoPanel.module.css";

export function InfoPanel() {
  return (
    <div className={styles.container}>
      <LocationPicker />
      <InfoCard />
    </div>
  );
}
