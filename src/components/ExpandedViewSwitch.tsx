import { useContext } from "react";
import { ExpandedViewContext } from "../contexts/ExpandedViewContext";

import styles from "../styles/components/ExpandedViewSwitch.module.css";

export function ExpandedViewSwitch() {
  const { isExpandedViewOn, switchExpandedView } = useContext(
    ExpandedViewContext
  );

  return (
    <div className={styles.container}>
      <p className={styles.viewState}>Modo Avançado:</p>
      <label className={styles.switch}>
        <input
          type="checkbox"
          className={styles.test}
          onChange={() => switchExpandedView()}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
