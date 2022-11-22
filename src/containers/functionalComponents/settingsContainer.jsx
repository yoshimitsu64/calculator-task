import { useDispatch } from "react-redux";

import { toast } from "yoshimitsu-toast-library";

import Settings from "@components/settings";

import { cleanHistory } from "@actions/historyActions";
import { addExpression, setPreviousExpression, setResult } from "@actions/calculatorActions";

function SettingsContainer() {
  const dispatch = useDispatch();
  const oncleanHistory = () => {
    dispatch(cleanHistory());
    dispatch(addExpression(""));
    dispatch(setResult(""));
    dispatch(setPreviousExpression(""));
    toast.createToast("info", "you've just deleted expression", {
      position: "top-left",
      duration: 10,
      animation: "bounce",
    });
  };

  return <Settings oncleanHistory={oncleanHistory} />;
}

export default SettingsContainer;
