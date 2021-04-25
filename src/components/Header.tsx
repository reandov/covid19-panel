import { LocationPicker } from "./LocationPicker";

import styles from "../styles/components/Header.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <LocationPicker />
    </div>
  );
}
