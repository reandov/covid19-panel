import { createContext, ReactNode, useState } from "react";

interface ViewerSwitcherData {
  isViewerSwitcherOn: boolean;
  switchToExpandedView: () => void;
}

interface ViewerSwitcherProviderProps {
  children: ReactNode;
}

export const ViewerSwitcherContext = createContext({} as ViewerSwitcherData);

export function ViewerSwitcherProvider({
  children,
}: ViewerSwitcherProviderProps) {
  const [isViewerSwitcherOn, setIsViewerSwitcherOn] = useState(false);

  function switchToExpandedView() {
    isViewerSwitcherOn
      ? setIsViewerSwitcherOn(false)
      : setIsViewerSwitcherOn(true);
  }

  return (
    <ViewerSwitcherContext.Provider
      value={{
        isViewerSwitcherOn,
        switchToExpandedView,
      }}
    >
      {children}
    </ViewerSwitcherContext.Provider>
  );
}
