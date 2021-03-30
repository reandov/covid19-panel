import * as national_data from "../../data/national_data.json";

import styles from "../styles/components/InfoCard.module.css";

export function InfoCard() {
  let [year, month, day] = Object.values(national_data.date)
    .slice(-1)[0]
    .split("-");

  return (
    <div className={styles.container}>
      <h1>DADOS ATUALIZADOS:</h1>
      <h1>{`${day}/${month}/${year}`}</h1>
    </div>
  );
}
