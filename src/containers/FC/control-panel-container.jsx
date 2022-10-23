import ControlPanel from "@components/control-panel";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpression,
  cleanHistory,
  setHistoryVisability,
} from "@store/actions";

function ControlPanelContainer() {
  const historyVisability = useSelector((state) => state.historyVisability);

  const dispatch = useDispatch();
  const hideHistoryClick = () => dispatch(setHistoryVisability(!historyVisability));
  const cleanHistoryClick = () => dispatch(cleanHistory());
  const cleanAllClick = () => {
    dispatch(cleanHistory());
    dispatch(addExpression(""));
  };
  return (
    <ControlPanel
      dispatch={dispatch}
      hideHistoryClick={hideHistoryClick}
      cleanHistoryClick={cleanHistoryClick}
      cleanAllClick={cleanAllClick}
    />
  );
}

export default ControlPanelContainer;
