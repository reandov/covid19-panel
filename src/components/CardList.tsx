import { useContext } from "react";

import { Card } from "../components/Card";

import { DataContext } from "../contexts/DataContext";

import styles from "../styles/components/CardList.module.css";

export function CardList() {
  const { dates, acc_cases, acc_deaths, new_cases, new_deaths } = useContext(
    DataContext
  );

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
      <Card
        cardTitle="Vacinados (1ª Dose)"
        cardData="11.818.482"
        cardType="vaccines"
      />
      <Card
        cardTitle="Vacinados (2ª Dose)"
        cardData="4.161.881"
        cardType="vaccines"
      />
    </div>
  );
}
