import { createContext, ReactNode, useState } from "react";

interface LocationMenuData {
  location: string;
  changeLocation: (location) => void;
}

interface LocationMenuProviderProps {
  children: ReactNode;
}

export const LocationMenuContext = createContext({} as LocationMenuData);

export function LocationMenuProvider({ children }: LocationMenuProviderProps) {
  const [location, setLocation] = useState("br");

  function changeLocation(location) {
    setLocation(location);
    console.log(location);
  }

  return (
    <LocationMenuContext.Provider
      value={{
        location,
        changeLocation,
      }}
    >
      {children}
    </LocationMenuContext.Provider>
  );
}
