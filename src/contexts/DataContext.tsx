import { createContext, ReactNode } from "react";

import * as national_data from "../../data/national_data.json";
import * as epi_weeks_data from "../../data/epi_weeks_data.json";
import * as daily_state_data from "../../data/daily_data.json";

interface CovidData {
  dates: string[];
  epi_weeks_labels: string[];
  states: string[];
  acc_cases: number[];
  acc_deaths: number[];
  new_cases: number[];
  new_deaths: number[];
  epi_weeks_ncases: number[];
  epi_weeks_ndeaths: number[];
  daily_state_acc_cases: number[];
  daily_state_acc_deaths: number[];
  daily_state_new_cases: number[];
  daily_state_new_deaths: number[];
}

interface CovidProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({} as CovidData);

export function DataProvider({ children }: CovidProviderProps) {
  var dates = Object.values(national_data.date);
  var epi_weeks_labels = Object.values(epi_weeks_data.epidemiological_week);
  var states = Object.values(daily_state_data.state);

  var acc_cases = Object.values(national_data.accumulated_num_cases);
  var acc_deaths = Object.values(national_data.accumulated_num_deaths);
  var new_cases = Object.values(national_data.new_num_cases);
  var new_deaths = Object.values(national_data.new_num_deaths);

  var epi_weeks_ncases = Object.values(epi_weeks_data.new_cases);
  var epi_weeks_ndeaths = Object.values(epi_weeks_data.new_deaths);

  var daily_state_acc_cases = Object.values(daily_state_data.accumulated_cases);
  var daily_state_acc_deaths = Object.values(
    daily_state_data.accumulated_deaths
  );
  var daily_state_new_cases = Object.values(daily_state_data.new_cases);
  var daily_state_new_deaths = Object.values(daily_state_data.new_deaths);

  return (
    <DataContext.Provider
      value={{
        dates,
        epi_weeks_labels,
        states,
        acc_cases,
        acc_deaths,
        new_cases,
        new_deaths,
        epi_weeks_ncases,
        epi_weeks_ndeaths,
        daily_state_acc_cases,
        daily_state_acc_deaths,
        daily_state_new_cases,
        daily_state_new_deaths,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
