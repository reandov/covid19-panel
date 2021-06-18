import { createContext, ReactNode, useContext, useState } from "react";

type UserThemeContextContextData = {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
};

type UserThemeContextContextProviderProps = {
  children: ReactNode;
};

export const UserThemeContextContext = createContext(
  {} as UserThemeContextContextData
);

export function UserThemeContextContextProvider({
  children,
}: UserThemeContextContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
  };

  return (
    <UserThemeContextContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </UserThemeContextContext.Provider>
  );
}

export const useUserThemeContext = () => {
  return useContext(UserThemeContextContext);
};
