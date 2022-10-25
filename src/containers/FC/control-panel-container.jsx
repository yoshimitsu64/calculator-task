import { useDispatch, useSelector } from "react-redux";
import ControlPanel from "@components/control-panel";
import {
  addExpression,
  cleanHistory,
  setHistoryVisability,
} from "@store/actions";

function ControlPanelContainer() {
  const historyVisability = useSelector((state) => state.historyVisability);

  const dispatch = useDispatch();
  const hideHistoryClick = () => {
    dispatch(setHistoryVisability(!historyVisability));
  };
  const cleanHistoryClick = () => dispatch(cleanHistory());
  const cleanAllClick = () => {
    dispatch(cleanHistory());
    dispatch(addExpression("0"));
  };
  return (
    <ControlPanel
      hideHistoryClick={hideHistoryClick}
      cleanHistoryClick={cleanHistoryClick}
      cleanAllClick={cleanAllClick}
    />
  );
}
export default ControlPanelContainer;
