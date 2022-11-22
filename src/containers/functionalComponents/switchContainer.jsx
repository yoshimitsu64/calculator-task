import { useDispatch, useSelector } from "react-redux";

import { toast } from "yoshimitsu-toast-library";

import Switch from "@components/switch";

import { toogleTheme } from "@actions/themeActions";

import { selectIsDarkTheme } from "@selectors/themeSelectors";

function SwitchContainer() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const onHandleClick = () => {
    dispatch(toogleTheme(!isDarkTheme));
    toast.createToast("info", "You've just switched theme", {
      position: "top-left",
      duration: 10,
      animation: "bounce",
      topic: "Theme",
    });
  };

  return <Switch onHandleClick={onHandleClick} />;
}

export default SwitchContainer;
