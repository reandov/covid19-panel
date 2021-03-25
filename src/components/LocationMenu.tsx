import { useContext } from "react";

import { LocationMenuContext } from "../contexts/LocationMenuContext";

import styles from "../styles/components/LocationMenu.module.css";

export function LocationMenu() {
  const { location, changeLocation } = useContext(LocationMenuContext);
  const state_list = [
    { key: "br", value: "Brasil" },
    { key: "ac", value: "Acre" },
    { key: "al", value: "Alagoas" },
    { key: "am", value: "Amazonas" },
    { key: "ap", value: "Amapá" },
    { key: "ba", value: "Bahia" },
    { key: "ce", value: "Ceará" },
    { key: "df", value: "Distrito Federal" },
    { key: "es", value: "Espírito Santo" },
    { key: "go", value: "Goiás" },
    { key: "ma", value: "Maranhão" },
    { key: "mg", value: "Minas Gerais" },
    { key: "ms", value: "Mato Grosso do Sul" },
    { key: "mt", value: "Mato Grosso" },
    { key: "pa", value: "Pará" },
    { key: "pb", value: "Paraíba" },
    { key: "pe", value: "Pernambuco" },
    { key: "pi", value: "Piauí" },
    { key: "pr", value: "Paraná" },
    { key: "rj", value: "Rio de Janeiro" },
    { key: "rn", value: "Rio Grande do Norte" },
    { key: "ro", value: "Rondônia" },
    { key: "rr", value: "Roraima" },
    { key: "rs", value: "Rio Grande do Sul" },
    { key: "sc", value: "Santa Catarina" },
    { key: "se", value: "Sergipe" },
    { key: "sp", value: "São Paulo" },
    { key: "to", value: "Tocantins" },
  ];

  function handleChange(event) {
    changeLocation(event.target.value);
  }

  return (
    <div className={styles.container}>
      <h1>Selecione uma localidade:</h1>
      <select
        name="states"
        id="state-select"
        onChange={handleChange}
        value={location}
      >
        {state_list.map((item) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
