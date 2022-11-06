import { useDispatch, useSelector } from "react-redux";

import Switch from "@components/switch";

import { toogleTheme } from "@actions/themeActions";

import { selectIsDarkTheme } from "@selectors/themeSelectors";

function SwitchContainer() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const onHandleClick = () => dispatch(toogleTheme(!isDarkTheme));

  return <Switch onHandleClick={onHandleClick} />;
}

export default SwitchContainer;
