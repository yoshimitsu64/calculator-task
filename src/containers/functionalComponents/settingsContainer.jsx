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
    toast.warning("You've just cleaned history");
  };

  return <Settings oncleanHistory={oncleanHistory} />;
}

export default SettingsContainer;
