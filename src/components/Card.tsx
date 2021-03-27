import styles from "../styles/components/Card.module.css";

export function Card({ cardTitle, cardData, cardType }) {
  const type = styles[`${cardType}`];

  return (
    <div className={`${styles.container} ${type}`}>
      <div className={styles.cardInfo}>
        <h1>{cardTitle}</h1>
        <hr />
        <p>{cardData}</p>
      </div>
    </div>
  );
}
