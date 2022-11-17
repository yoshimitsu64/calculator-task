import { useSelector } from "react-redux";

import Calculator from "@components/calculatorFC";

import { selectHistoryVisability } from "@selectors/historySelectors";

function CalculatorContainer() {
  const historyVisability = useSelector(selectHistoryVisability);
  return <Calculator isHidden={historyVisability} />;
}

export default CalculatorContainer;
