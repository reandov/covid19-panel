import styles from "../styles/components/DataInfo.module.css";

import * as national_data from "../../data/national_data.json";

export function DataInfo() {
  let [year, month, day] = Object.values(national_data.date)
    .slice(-1)[0]
    .split("-");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Informações</h1>
        <div className={styles.headerInfo}>
          <p>
            <strong>Dados Atualizados:</strong> {`${day}/${month}/${year}`}
          </p>
        </div>
      </div>
    </div>
  );
}
