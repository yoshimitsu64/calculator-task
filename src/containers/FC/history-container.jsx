import { useSelector } from "react-redux";
import History from "@components/history";
function HistoryContainer() {
  const history = useSelector((state) => state?.history);

  return <History history={history}/>;
}

export default HistoryContainer;
