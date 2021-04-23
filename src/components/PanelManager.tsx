// React - Next Importations
import { useContext } from "react";

// Components Importations
import { NationalView } from "./NationalView";
import { StateView } from "./StateView";

// Contexts Importations
import { LocationMenuContext } from "../contexts/LocationMenuContext";

export function PanelManager() {
  const { location } = useContext(LocationMenuContext);

  return (
    <>
      {location == "br" ? (
        <>
          <NationalView />
        </>
      ) : (
        <StateView location={location} />
      )}
    </>
  );
}
