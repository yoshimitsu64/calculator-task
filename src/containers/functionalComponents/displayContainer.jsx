import { useSelector } from "react-redux";

import Display from "@components/display";

import {
  selectExpression,
  selectResult,
  selectPreviousExpression,
} from "@selectors/calculatorSelectors";

function DisplayContainer() {
  const expression = useSelector(selectExpression);
  const result = useSelector(selectResult);
  const previousExpression = useSelector(selectPreviousExpression);

  return (
    <Display expression={expression} result={result} previousExpression={previousExpression} />
  );
}

export default DisplayContainer;
