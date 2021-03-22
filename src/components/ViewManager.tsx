import { useContext } from "react";

import { SimpleView } from "../components/SimpleView";
import { ExpandedView } from "../components/ExpandedView";
import { CardList } from "../components/CardList";

import { ViewerSwitcherContext } from "../contexts/ViewerSwitcherContext";

export function ViewManager() {
  const { isViewerSwitcherOn } = useContext(ViewerSwitcherContext);

  return isViewerSwitcherOn ? (
    <ExpandedView />
  ) : (
    <>
      <CardList />
      <SimpleView />
    </>
  );
}
