// React - Next Importations
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Library Components
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

// Interfaces
import { ILocation } from "../../utils/types/types";

// Styles
import { useStyles } from "./locationPicker.module";

export function LocationPicker() {
  const classes = useStyles();
  const [location, setLocation] = useState("");

  const locationsList: ILocation[] = [
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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocation(event.target.value as string);
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <Box className={classes.container}>
      <FormControl variant="outlined" className={classes.select}>
        <InputLabel id="demo-simple-select-outlined-label">
          Selecione sua localização
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={location}
          onChange={handleChange}
          label="Selecione sua localização"
        >
          {locationsList.map((location: ILocation) => {
            return (
              <MenuItem key={location.key} value={location.key}>
                <Link href={`${location.key}`} locale={"/location"}>
                  {location.value}
                </Link>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
