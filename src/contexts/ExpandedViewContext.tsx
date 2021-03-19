import { createContext, ReactNode, useState } from "react";

interface ExpandedViewData {
  isExpandedViewOn: boolean;
  switchExpandedView: () => void;
}

interface ExpandedViewProviderProps {
  children: ReactNode;
}

export const ExpandedViewContext = createContext({} as ExpandedViewData);

export function ExpandedViewProvider({ children }: ExpandedViewProviderProps) {
  const [isExpandedViewOn, setIsExpandedViewOn] = useState(false);

  function switchExpandedView() {
    console.log("worked!");
    setIsExpandedViewOn(true);
  }

  return (
    <ExpandedViewContext.Provider
      value={{
        isExpandedViewOn,
        switchExpandedView,
      }}
    >
      {children}
    </ExpandedViewContext.Provider>
  );
}
