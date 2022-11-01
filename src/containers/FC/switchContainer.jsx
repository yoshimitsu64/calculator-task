import { useDispatch, useSelector } from "react-redux"

import Switch from "@components/switch"
import { toogleTheme } from "@actions"

function SwitchContainer() {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.isDarkTheme)
  const handleClick = () => dispatch(toogleTheme(!isDarkTheme))

  return <Switch handleClick={handleClick} />
}

export default SwitchContainer
