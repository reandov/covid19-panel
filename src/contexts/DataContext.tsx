import { createContext, ReactNode } from "react";

import * as national_data from "../../data/national_data.json";

interface CovidData {
  dates: string[];
  acc_cases: number[];
  acc_deaths: number[];
  new_cases: number[];
  new_deaths: number[];
}

interface CovidProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({} as CovidData);

export function DataProvider({ children }: CovidProviderProps) {
  var dates = Object.values(national_data.date);
  var acc_cases = Object.values(national_data.accumulated_num_cases);
  var acc_deaths = Object.values(national_data.accumulated_num_deaths);
  var new_cases = Object.values(national_data.new_num_cases);
  var new_deaths = Object.values(national_data.new_num_deaths);

  return (
    <DataContext.Provider
      value={{
        dates,
        acc_cases,
        acc_deaths,
        new_cases,
        new_deaths,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
