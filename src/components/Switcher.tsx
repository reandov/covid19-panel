import { useContext } from "react";
import { ViewerSwitcherContext } from "../contexts/ViewerSwitcherContext";

import styles from "../styles/components/ViewSwitcher.module.css";

export function ViewSwitcher() {
  const { switchToExpandedView } = useContext(ViewerSwitcherContext);

  return (
    <div className={styles.container}>
      <p className={styles.viewState}>Modo Avançado:</p>
      <label className={styles.switch}>
        <input
          type="checkbox"
          className={styles.test}
          onChange={switchToExpandedView}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
