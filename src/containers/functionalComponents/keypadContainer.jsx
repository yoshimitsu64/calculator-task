import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo, useEffect, memo } from "react";

import { toast } from "yoshimitsu-toast-library";

import Keypad from "@components/keypad";
import { calctulateExpression } from "@utils/calculator";
import {
  validateExpression,
  temporaryExpresssionArray,
  checkExpressionForOperators,
  containsOperator,
} from "@helpers/calculatorHelpers";

import { addExpression, setResult, setPreviousExpression } from "@actions/calculatorActions";
import { addHistory } from "@actions/historyActions";

import {
  selectExpression,
  selectResult,
  selectPreviousExpression,
} from "@selectors/calculatorSelectors";

function KeypadContainer() {
  const dispatch = useDispatch();

  const [calculate, setCalculate] = useState(false);
  const [error, setError] = useState(null);

  const expression = useSelector(selectExpression);
  const result = useSelector(selectResult);
  const previousExpression = useSelector(selectPreviousExpression);

  const memoizedExpr = useMemo(() => {
    if (previousExpression && expression) {
      try {
        return calctulateExpression(previousExpression);
      } catch (e) {
        setError(e.message);
        setCalculate(false);
        return e.message;
      }
    }
    return expression;
  }, [previousExpression]);

  const onHandleClick = (e) => {
    switch (e.target.value) {
      case "C":
        result.length !== 0 && dispatch(setResult(""));
        temporaryExpresssionArray.length = 0;
        dispatch(setResult(""));
        dispatch(addExpression(""));
        toast.createToast("info", "You've just deleted expression", {
          position: "top-left",
          duration: 10,
          animation: "bounce",
          topic: "Expression cleaner",
        });
        break;
      case "CE":
        result.length !== 0 && dispatch(setResult(""));
        dispatch(addExpression(expression.slice(0, -1)));
        temporaryExpresssionArray.pop();
        break;
      case "=":
        if (
          checkExpressionForOperators(expression) &&
          !containsOperator(expression[expression.length - 1])
        ) {
          try {
            temporaryExpresssionArray.length = 0;
            dispatch(setPreviousExpression(expression));
            setCalculate(true);
            break;
          } catch (e) {
            dispatch(addExpression(e.message));
          }
        }
        break;
      default:
        result?.length !== 0 && dispatch(setResult(""));
        if (!expression.includes("Error")) {
          validateExpression(e.target.value, expression, dispatch);
        } else {
          validateExpression(e.target.value, "", dispatch);
        }
        break;
    }
  };

  useEffect(() => {
    if (previousExpression && error === null && expression) {
      dispatch(setResult(memoizedExpr));
      dispatch(addHistory(expression));
      dispatch(addExpression(""));
      setCalculate(false);
    }
  }, [calculate]);

  useEffect(() => {
    if (error) {
      dispatch(addHistory(previousExpression));
      dispatch(addExpression(error));
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    if (result.length > 0 && !result.includes("Error")) {
      toast.createToast("success", `Result is ${result}`, {
        position: "top-center",
        duration: 10,
        animation: "bounce",
        topic: "Result",
      });
    }
  }, [result]);

  useEffect(() => {
    error &&
      toast.createToast("error", "Invalid expression", {
        position: "top-center",
        duration: 10,
        animation: "bounce",
      });
  }, [error]);

  useEffect(() => {
    result.length === 0 && dispatch(setPreviousExpression(""));
  }, [result]);

  return <Keypad onHandleClick={onHandleClick} />;
}

export default memo(KeypadContainer);
