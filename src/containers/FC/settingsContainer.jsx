import { useDispatch } from "react-redux"

import Settings from "@components/settings"
import { cleanHistory, addExpression, setPreviousExpression } from "@actions"

function SettingsContainer() {
  const dispatch = useDispatch()
  const cleanHistoryClick = () => {
    dispatch(cleanHistory())
    dispatch(addExpression("0"))
    dispatch(setPreviousExpression(""))
  }

  return <Settings cleanHistoryClick={cleanHistoryClick} />
}

export default SettingsContainer
