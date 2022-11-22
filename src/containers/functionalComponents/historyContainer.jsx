import { useSelector } from "react-redux";

import History from "@components/history";

import { selectHistory } from "@selectors/historySelectors";

function HistoryContainer() {
  const history = useSelector(selectHistory);
  
  return <History history={history} />;
}

export default HistoryContainer;
