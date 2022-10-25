import { useDispatch } from "react-redux";
import Settings from "@components/settings";
import { cleanHistory, addExpression } from "@store/actions";

function SettingsContainer() {
  const dispatch = useDispatch();
  const cleanHistoryClick = () => dispatch(cleanHistory());
  const cleanAllClick = () => {
    dispatch(cleanHistory());
    dispatch(addExpression("0"));
  };
  
  return (
    <Settings
      cleanHistoryClick={cleanHistoryClick}
      cleanAllClick={cleanAllClick}
    />
  );
}

export default SettingsContainer;
