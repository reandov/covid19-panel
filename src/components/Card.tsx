import styles from "../styles/components/Card.module.css";

export function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.cardInfo}>
        <h1>Casos Acumulados</h1>
        <hr />
        <p>16.457.236</p>
      </div>
    </div>
  );
}
