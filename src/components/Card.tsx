import styles from "../styles/components/Card.module.css";

export function Card({ cardTitle, cardData, cardType }) {
  const type = styles[`container-${cardType}`];

  return (
    <div className={type}>
      <div className={styles.cardInfo}>
        <h1>{cardTitle}</h1>
        <hr />
        <p>{cardData}</p>
      </div>
    </div>
  );
}
