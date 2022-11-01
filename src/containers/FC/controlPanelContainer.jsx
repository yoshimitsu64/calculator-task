import { useDispatch, useSelector } from "react-redux"

import ControlPanel from "@components/control-panel"
import { setHistoryVisability } from "@actions"

function ControlPanelContainer() {
  const dispatch = useDispatch()
  const historyVisability = useSelector((state) => state.historyVisability)
  const hideHistoryClick = () => {
    dispatch(setHistoryVisability(!historyVisability))
  }

  return <ControlPanel hideHistoryClick={hideHistoryClick} />
}
export default ControlPanelContainer
