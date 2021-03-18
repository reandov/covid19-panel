import styles from "../styles/components/DarkModeButton.module.css";

export function DarkModeButton() {
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input type="checkbox" className={styles.test} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
}
