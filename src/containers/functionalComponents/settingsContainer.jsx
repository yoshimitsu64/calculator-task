import { useDispatch } from "react-redux";

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
  };

  return <Settings oncleanHistory={oncleanHistory} />;
}

export default SettingsContainer;
