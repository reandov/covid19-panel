import { Card } from "../components/Card";

import styles from "../styles/components/CardList.module.css";

export function CardList({
  dates,
  acc_cases,
  acc_deaths,
  new_cases,
  new_deaths,
}) {
  function convertToFormat(number_as_string) {
    return Intl.NumberFormat("pt-br").format(number_as_string);
  }

  return (
    <div className={styles.container}>
      <Card
        cardTitle="Casos Acumulados"
        cardData={convertToFormat(acc_cases.slice(-1))}
        cardType="cases"
      />
      <Card
        cardTitle="Casos 24h"
        cardData={convertToFormat(new_cases.slice(-1))}
        cardType="cases"
      />
      <Card
        cardTitle="Óbitos Acumulados"
        cardData={convertToFormat(acc_deaths.slice(-1))}
        cardType="deaths"
      />
      <Card
        cardTitle="Óbitos 24h"
        cardData={convertToFormat(new_deaths.slice(-1))}
        cardType="deaths"
      />
    </div>
  );
}
