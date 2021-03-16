import React from 'react';

import styles from '../styles/components/NavigationBar.module.css';

export function NavigationBar() {
  return(
    <div className={styles.container}>
      <img src="/icons/covid_icon.svg" alt="virus icon"/>
      <h1>COVID-19 — Painel</h1>
    </div>
  );
}