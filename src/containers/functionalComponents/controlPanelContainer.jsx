import { useDispatch, useSelector } from "react-redux";

import ControlPanel from "@components/controlPanel";

import { selectHistoryVisability } from "@selectors/historySelectors";

import { setHistoryVisability } from "@actions/historyActions";

function ControlPanelContainer() {
  const dispatch = useDispatch();
  const historyVisability = useSelector(selectHistoryVisability);
  const onHideHistory = () => {
    dispatch(setHistoryVisability(!historyVisability));
  };

  return <ControlPanel onHideHistory={onHideHistory} historyVisability={historyVisability} />;
}
export default ControlPanelContainer;
